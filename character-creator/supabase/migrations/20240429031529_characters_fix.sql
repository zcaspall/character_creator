alter table "public"."JoinedGame" add column "character_id" bigint;

alter table "public"."Users" add column "email" character varying;

alter table "public"."JoinedGame" add constraint "JoinedGame_character_id_fkey" FOREIGN KEY (character_id) REFERENCES "Characters"(character_id) ON DELETE CASCADE not valid;

alter table "public"."JoinedGame" validate constraint "JoinedGame_character_id_fkey";

create policy "Enable insert for authenticated users only"
on "public"."Characters"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read for authenticated users only"
on "public"."Characters"
as permissive
for select
to authenticated
using (true);


create policy "Enable update for authenticated users only"
on "public"."Characters"
as permissive
for update
to authenticated
using (true)
with check (true);



