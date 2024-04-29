create table "public"."Characters" (
    "character_id" bigint generated by default as identity not null,
    "player_id" uuid default auth.uid(),
    "game_id" bigint,
    "character_name" text default ''::text,
    "class" text default ''::text,
    "level" integer,
    "background" text default ''::text,
    "race" text default ''::text,
    "prof_bonus" integer,
    "character_stats" jsonb,
    "character_skills" jsonb,
    "FnT" jsonb,
    "saving_throws" jsonb,
    "inspiration" integer,
    "hp_max" bigint,
    "hp_curr" bigint,
    "hp_temp" bigint
);


alter table "public"."Characters" enable row level security;

CREATE UNIQUE INDEX "Characters_character_id_key" ON public."Characters" USING btree (character_id);

CREATE UNIQUE INDEX "Characters_pkey" ON public."Characters" USING btree (character_id);

alter table "public"."Characters" add constraint "Characters_pkey" PRIMARY KEY using index "Characters_pkey";

alter table "public"."Characters" add constraint "Characters_character_id_key" UNIQUE using index "Characters_character_id_key";

alter table "public"."Characters" add constraint "Characters_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "Games"(id) ON DELETE CASCADE not valid;

alter table "public"."Characters" validate constraint "Characters_game_id_fkey";

alter table "public"."Characters" add constraint "Characters_player_id_fkey" FOREIGN KEY (player_id) REFERENCES "Users"(id) ON DELETE CASCADE not valid;

alter table "public"."Characters" validate constraint "Characters_player_id_fkey";

grant delete on table "public"."Characters" to "anon";

grant insert on table "public"."Characters" to "anon";

grant references on table "public"."Characters" to "anon";

grant select on table "public"."Characters" to "anon";

grant trigger on table "public"."Characters" to "anon";

grant truncate on table "public"."Characters" to "anon";

grant update on table "public"."Characters" to "anon";

grant delete on table "public"."Characters" to "authenticated";

grant insert on table "public"."Characters" to "authenticated";

grant references on table "public"."Characters" to "authenticated";

grant select on table "public"."Characters" to "authenticated";

grant trigger on table "public"."Characters" to "authenticated";

grant truncate on table "public"."Characters" to "authenticated";

grant update on table "public"."Characters" to "authenticated";

grant delete on table "public"."Characters" to "service_role";

grant insert on table "public"."Characters" to "service_role";

grant references on table "public"."Characters" to "service_role";

grant select on table "public"."Characters" to "service_role";

grant trigger on table "public"."Characters" to "service_role";

grant truncate on table "public"."Characters" to "service_role";

grant update on table "public"."Characters" to "service_role";

