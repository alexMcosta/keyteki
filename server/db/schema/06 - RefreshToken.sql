-- Table: public."RefreshToken"

-- DROP TABLE public."RefreshToken";

CREATE TABLE public."RefreshToken"
(
    "Id" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "TokenId" text COLLATE pg_catalog."default",
    "UserId" integer NOT NULL,
    "Token" text COLLATE pg_catalog."default",
    "Expiry" timestamp without time zone NOT NULL,
    "Ip" text COLLATE pg_catalog."default",
    "LastUsed" timestamp without time zone NOT NULL,
    CONSTRAINT "PK_RefreshToken" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_RefreshToken_Users_UserId" FOREIGN KEY ("UserId")
        REFERENCES public."Users" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public."RefreshToken"
    OWNER to keyteki;
-- Index: IX_RefreshToken_UserId

-- DROP INDEX public."IX_RefreshToken_UserId";

CREATE INDEX "IX_RefreshToken_UserId"
    ON public."RefreshToken" USING btree
    ("UserId" ASC NULLS LAST)
    TABLESPACE pg_default;