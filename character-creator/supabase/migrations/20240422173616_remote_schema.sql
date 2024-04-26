
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."create_user_on_signup"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
begin
  insert into public."Users" (id)
  select new.id
  end;
  return new;
end;
$$;

ALTER FUNCTION "public"."create_user_on_signup"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."Games" (
    "id" bigint NOT NULL,
    "gm_id" "uuid" NOT NULL,
    "invite_code" "text" NOT NULL,
    "name" character varying NOT NULL,
    "created" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."Games" OWNER TO "postgres";

COMMENT ON TABLE "public"."Games" IS 'User created game sessions';

ALTER TABLE "public"."Games" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."Games_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."JoinedGame" (
    "player_id" "uuid" NOT NULL,
    "game_id" bigint NOT NULL
);

ALTER TABLE "public"."JoinedGame" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."Users" (
    "id" "uuid" NOT NULL
);

ALTER TABLE "public"."Users" OWNER TO "postgres";

ALTER TABLE ONLY "public"."Games"
    ADD CONSTRAINT "Games_id_key" UNIQUE ("id");

ALTER TABLE ONLY "public"."Games"
    ADD CONSTRAINT "Games_invite_code_key" UNIQUE ("invite_code");

ALTER TABLE ONLY "public"."Games"
    ADD CONSTRAINT "Games_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."JoinedGame"
    ADD CONSTRAINT "JoinedGame_pkey" PRIMARY KEY ("player_id", "game_id");

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_auth_id_key" UNIQUE ("id");

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Games"
    ADD CONSTRAINT "Games_gm_id_fkey" FOREIGN KEY ("gm_id") REFERENCES "public"."Users"("id");

ALTER TABLE ONLY "public"."JoinedGame"
    ADD CONSTRAINT "JoinedGame_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."Games"("id") ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE ONLY "public"."JoinedGame"
    ADD CONSTRAINT "JoinedGame_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "public"."Users"("id") ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON UPDATE RESTRICT ON DELETE SET NULL;

CREATE POLICY "Enable insert for authenticated users only" ON "public"."Games" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable read access for all authenticated users" ON "public"."Games" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."Users" FOR SELECT USING (true);

ALTER TABLE "public"."Games" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."JoinedGame" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."Users" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."create_user_on_signup"() TO "anon";
GRANT ALL ON FUNCTION "public"."create_user_on_signup"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_user_on_signup"() TO "service_role";

GRANT ALL ON TABLE "public"."Games" TO "anon";
GRANT ALL ON TABLE "public"."Games" TO "authenticated";
GRANT ALL ON TABLE "public"."Games" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Games_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Games_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Games_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."JoinedGame" TO "anon";
GRANT ALL ON TABLE "public"."JoinedGame" TO "authenticated";
GRANT ALL ON TABLE "public"."JoinedGame" TO "service_role";

GRANT ALL ON TABLE "public"."Users" TO "anon";
GRANT ALL ON TABLE "public"."Users" TO "authenticated";
GRANT ALL ON TABLE "public"."Users" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
