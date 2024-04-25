alter table "public"."Games" add column "players" bigint default '0'::bigint;

create policy "Enable update for authenticated users only"
on "public"."Games"
as permissive
for update
to authenticated
using (true)
with check (true);


create policy "Enable insert for authenticated users only"
on "public"."JoinedGame"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."JoinedGame"
as permissive
for select
to public
using (true);



