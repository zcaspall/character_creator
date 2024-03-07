revoke delete on table "public"."joined_games" from "anon";

revoke insert on table "public"."joined_games" from "anon";

revoke references on table "public"."joined_games" from "anon";

revoke select on table "public"."joined_games" from "anon";

revoke trigger on table "public"."joined_games" from "anon";

revoke truncate on table "public"."joined_games" from "anon";

revoke update on table "public"."joined_games" from "anon";

revoke delete on table "public"."joined_games" from "authenticated";

revoke insert on table "public"."joined_games" from "authenticated";

revoke references on table "public"."joined_games" from "authenticated";

revoke select on table "public"."joined_games" from "authenticated";

revoke trigger on table "public"."joined_games" from "authenticated";

revoke truncate on table "public"."joined_games" from "authenticated";

revoke update on table "public"."joined_games" from "authenticated";

revoke delete on table "public"."joined_games" from "service_role";

revoke insert on table "public"."joined_games" from "service_role";

revoke references on table "public"."joined_games" from "service_role";

revoke select on table "public"."joined_games" from "service_role";

revoke trigger on table "public"."joined_games" from "service_role";

revoke truncate on table "public"."joined_games" from "service_role";

revoke update on table "public"."joined_games" from "service_role";

alter table "public"."joined_games" drop constraint "joined_games_game_id_fkey";

alter table "public"."joined_games" drop constraint "joined_games_player_id_fkey";

alter table "public"."Games" drop constraint "Games_gm_id_fkey";

alter table "public"."joined_games" drop constraint "joined_games_pkey";

drop index if exists "public"."joined_games_pkey";

drop table "public"."joined_games";

create table "public"."JoinedGame" (
    "player_id" uuid not null,
    "game_id" bigint not null
);


alter table "public"."JoinedGame" enable row level security;

create table "public"."Users" (
    "id" uuid not null
);


alter table "public"."Users" enable row level security;

alter table "public"."Games" add column "created" timestamp with time zone;

alter table "public"."Games" alter column "gm_id" drop default;

alter table "public"."Games" alter column "invite_code" drop default;

alter table "public"."Games" alter column "invite_code" set data type text using "invite_code"::text;

CREATE UNIQUE INDEX "JoinedGame_pkey" ON public."JoinedGame" USING btree (player_id, game_id);

CREATE UNIQUE INDEX "Users_auth_id_key" ON public."Users" USING btree (id);

CREATE UNIQUE INDEX "Users_pkey" ON public."Users" USING btree (id);

alter table "public"."JoinedGame" add constraint "JoinedGame_pkey" PRIMARY KEY using index "JoinedGame_pkey";

alter table "public"."Users" add constraint "Users_pkey" PRIMARY KEY using index "Users_pkey";

alter table "public"."JoinedGame" add constraint "JoinedGame_game_id_fkey" FOREIGN KEY (game_id) REFERENCES "Games"(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."JoinedGame" validate constraint "JoinedGame_game_id_fkey";

alter table "public"."JoinedGame" add constraint "JoinedGame_player_id_fkey" FOREIGN KEY (player_id) REFERENCES "Users"(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."JoinedGame" validate constraint "JoinedGame_player_id_fkey";

alter table "public"."Users" add constraint "Users_auth_id_key" UNIQUE using index "Users_auth_id_key";

alter table "public"."Users" add constraint "Users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE SET NULL not valid;

alter table "public"."Users" validate constraint "Users_id_fkey";

alter table "public"."Games" add constraint "Games_gm_id_fkey" FOREIGN KEY (gm_id) REFERENCES "Users"(id) not valid;

alter table "public"."Games" validate constraint "Games_gm_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_user_on_signup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public."Users" (id)
  select new.id
  end;
  return new;
end;
$function$
;

grant delete on table "public"."JoinedGame" to "anon";

grant insert on table "public"."JoinedGame" to "anon";

grant references on table "public"."JoinedGame" to "anon";

grant select on table "public"."JoinedGame" to "anon";

grant trigger on table "public"."JoinedGame" to "anon";

grant truncate on table "public"."JoinedGame" to "anon";

grant update on table "public"."JoinedGame" to "anon";

grant delete on table "public"."JoinedGame" to "authenticated";

grant insert on table "public"."JoinedGame" to "authenticated";

grant references on table "public"."JoinedGame" to "authenticated";

grant select on table "public"."JoinedGame" to "authenticated";

grant trigger on table "public"."JoinedGame" to "authenticated";

grant truncate on table "public"."JoinedGame" to "authenticated";

grant update on table "public"."JoinedGame" to "authenticated";

grant delete on table "public"."JoinedGame" to "service_role";

grant insert on table "public"."JoinedGame" to "service_role";

grant references on table "public"."JoinedGame" to "service_role";

grant select on table "public"."JoinedGame" to "service_role";

grant trigger on table "public"."JoinedGame" to "service_role";

grant truncate on table "public"."JoinedGame" to "service_role";

grant update on table "public"."JoinedGame" to "service_role";

grant delete on table "public"."Users" to "anon";

grant insert on table "public"."Users" to "anon";

grant references on table "public"."Users" to "anon";

grant select on table "public"."Users" to "anon";

grant trigger on table "public"."Users" to "anon";

grant truncate on table "public"."Users" to "anon";

grant update on table "public"."Users" to "anon";

grant delete on table "public"."Users" to "authenticated";

grant insert on table "public"."Users" to "authenticated";

grant references on table "public"."Users" to "authenticated";

grant select on table "public"."Users" to "authenticated";

grant trigger on table "public"."Users" to "authenticated";

grant truncate on table "public"."Users" to "authenticated";

grant update on table "public"."Users" to "authenticated";

grant delete on table "public"."Users" to "service_role";

grant insert on table "public"."Users" to "service_role";

grant references on table "public"."Users" to "service_role";

grant select on table "public"."Users" to "service_role";

grant trigger on table "public"."Users" to "service_role";

grant truncate on table "public"."Users" to "service_role";

grant update on table "public"."Users" to "service_role";

create policy "Enable insert for authenticated users only"
on "public"."Games"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all authenticated users"
on "public"."Games"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for all users"
on "public"."Users"
as permissive
for select
to public
using (true);



