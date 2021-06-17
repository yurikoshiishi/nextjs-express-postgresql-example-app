--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

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

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    brand_id uuid NOT NULL,
    brand_name_ja text NOT NULL,
    brand_name_en text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- Name: product_masters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_masters (
    product_master_id uuid NOT NULL,
    brand_id uuid NOT NULL,
    name text NOT NULL,
    url_amazon text,
    url_myprotein text,
    url_iherb text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.product_masters OWNER TO postgres;

--
-- Name: product_variations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_variations (
    product_variation_id uuid NOT NULL,
    brand_id uuid NOT NULL,
    product_master_id uuid NOT NULL,
    flavor text NOT NULL,
    url_amazon text,
    url_myprotein text,
    url_iherb text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.product_variations OWNER TO postgres;

--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    review_id uuid NOT NULL,
    product_master_id uuid NOT NULL,
    product_variation_id uuid NOT NULL,
    taste_rating integer NOT NULL,
    mix_rating integer NOT NULL,
    total_rating integer NOT NULL,
    description character varying(1000) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    thumbsup_count integer DEFAULT 0 NOT NULL,
    user_id text NOT NULL,
    CONSTRAINT reviews_mix_rating_check CHECK (((mix_rating >= 1) AND (mix_rating <= 5))),
    CONSTRAINT reviews_taste_rating_check CHECK (((taste_rating >= 1) AND (taste_rating <= 5))),
    CONSTRAINT reviews_total_rating_check CHECK (((total_rating >= 1) AND (total_rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (brand_id, brand_name_ja, brand_name_en, created_at, updated_at) FROM stdin;
7e8b2bca-404d-45da-a05f-fbf5e3024634	ゴールドジム	GOLD'S GYM	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
8341e911-be5b-44e5-ae3e-a6e4914bbeae	バルクスポーツ	BULKSPORTS	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	マイプロテイン	Myprotein	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
2596f7ee-06e4-4cc0-a2b1-2969b3a4d24c	フィットネスショップ	FITNESS Shop	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
6289763a-0f77-4a0a-a942-d5590375cebc	ビーレジェンド	beLEGEND	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
5a4472d5-1f88-46e4-af29-85623827f60e	ザバス	SAVAS	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
448043fe-d423-4f6c-aeaa-408f7d5682ac	エクスプロージョン	X-PLOSION	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
bdeedf8c-5b7e-4765-8d12-62524b345c80	DNS	DNS	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
56354046-6ea6-47d1-8814-71b5b375181b	オプチマムニュートリション	Optimum Nutrition	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	アルプロン	ALPRON	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
93b2acae-f114-4045-a968-e22488cf2789	ケンタイ	Kentai	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
b7fa1223-5b07-481c-be3c-6c0c24117619	ファイン・ラボ	FINE LAB	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
964f567f-2a71-40ab-aa25-29a04d11ba56	パワープロダクション	POWER PRODUCTION	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
d17d0e1f-3ed3-4b22-838e-21380779a354	ハレオ	HALEO	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
e5fc892f-25de-441e-b050-7a6c6c1bfd49	グロング	GronG	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
087482e1-70e2-4b13-8275-e576b96a6d8e	ハイクリアー	HIGH CLEAR	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
ad1348b1-0f56-47ec-a84f-944d1b1bb120	エクステンド	XTEND	2020-12-31 17:48:19.658724	2020-12-31 17:48:19.658724
\.


--
-- Data for Name: product_masters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_masters (product_master_id, brand_id, name, url_amazon, url_myprotein, url_iherb, created_at, updated_at) FROM stdin;
2f58d1fd-3365-447d-9b18-501fc9712c81	7e8b2bca-404d-45da-a05f-fbf5e3024634	ホエイプロテイン+ホエイペプチド＆ビタミン	https://www.amazon.co.jp/exec/obidos/ASIN/B06XWW8YYM?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
671a6f47-4fbc-408c-8acb-7d43f172d255	7e8b2bca-404d-45da-a05f-fbf5e3024634	【旧品】 ホエイプロテイン+ホエイペプチド＆ビタミン	https://www.amazon.co.jp/exec/obidos/ASIN/B00865BT0Q?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
101fd983-6cf8-43b9-b706-7fe76362ea83	8341e911-be5b-44e5-ae3e-a6e4914bbeae	ビッグホエイ	https://www.amazon.co.jp/exec/obidos/ASIN/B088WFJJ4K?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
53bb2786-64ec-49cd-880a-bc80aa385bd4	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	【旧品】 Impact ホエイプロテイン		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
4915626a-6606-4d31-8157-035cf9c6b1f0	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	THE ホエイ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
2f2d8b6a-c1fc-43e8-bf1c-508ea35727e6	2596f7ee-06e4-4cc0-a2b1-2969b3a4d24c	オリジナルホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B0067VIO2C?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
cda62cf7-f9f5-4c67-9757-71eb80aec907	6289763a-0f77-4a0a-a942-d5590375cebc	ビーレジェンド プロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B075DV6RX4?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
06ece172-8670-4eb1-bc7f-0c378d6b5510	6289763a-0f77-4a0a-a942-d5590375cebc	くまもんバージョン	https://www.amazon.co.jp/exec/obidos/ASIN/B071NLL3WW?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	5a4472d5-1f88-46e4-af29-85623827f60e	ホエイプロテイン100	https://www.amazon.co.jp/exec/obidos/ASIN/B07NPXRQQP?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
73071df9-a3f4-4d4f-a475-50ab199f2ef6	448043fe-d423-4f6c-aeaa-408f7d5682ac	100％ナチュラルホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B078WNFXQQ?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
2e47fec0-bc8a-4b93-bd5d-016184e5b408	bdeedf8c-5b7e-4765-8d12-62524b345c80	【旧品】 プロテインホエイ100	https://www.amazon.co.jp/exec/obidos/ASIN/B077JSCF6L?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
5b24f9ed-b566-412b-86f5-91def082e066	bdeedf8c-5b7e-4765-8d12-62524b345c80	ホエイプロテイン ストイック	https://www.amazon.co.jp/exec/obidos/ASIN/B0874TP8TP?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
b9eb9ff1-50c6-4933-b2a7-124869f92a18	bdeedf8c-5b7e-4765-8d12-62524b345c80	【旧品】 woman ホエイフィットプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B001BAO05E?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
cf168b6d-dc85-4e63-8bda-7c17187c1fb9	bdeedf8c-5b7e-4765-8d12-62524b345c80	ホエイプロテインSLOW	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ303HG?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
095caeea-053d-449f-be30-563c3ef8030e	bdeedf8c-5b7e-4765-8d12-62524b345c80	【旧品】 ホエイプロテインG+	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ2ZYEO?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
8d4a5efb-d900-4a3d-8440-6f17862f32ef	bdeedf8c-5b7e-4765-8d12-62524b345c80	ホエイプロテインG+	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ2ZYCQ?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
7bab6e3a-645d-46a3-9a4c-94f4b5152c75	bdeedf8c-5b7e-4765-8d12-62524b345c80	ホエイプロテインSP	https://www.amazon.co.jp/exec/obidos/ASIN/B073BBC2JR?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
a211f11a-073d-47b7-a2c3-4c8170ceadef	bdeedf8c-5b7e-4765-8d12-62524b345c80	アクティブホエイプロイテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B06XKSNFL4?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
6acba276-1988-4b0b-9165-048bfe266bc3	56354046-6ea6-47d1-8814-71b5b375181b	ゴールドスタンダード 100%ホエイ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Chocolate-Malt-5-lbs-2-27-kg/27504?rcode=KCG536	2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
d832c203-d9ba-4279-a91b-132dfb03f0bc	56354046-6ea6-47d1-8814-71b5b375181b	ゴールドスタンダード 100％ホエイ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Chocolate-Coconut-5-lbs-2-27-kg/69590?rcode=KCG536	2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
4339f516-0f39-4b15-8057-bba5db700f9d	8341e911-be5b-44e5-ae3e-a6e4914bbeae	【Amazon.co.jp限定】バルク ホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B07D8HM32Q?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
d8ffe0f3-421f-400f-9d9c-ad85af8921a7	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	WPC ホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B07H3LWCKP?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
9f52a772-a284-4075-8387-1e139ad90fb5	93b2acae-f114-4045-a968-e22488cf2789	100%CFDホエイプロテインプラチナ	https://www.amazon.co.jp/exec/obidos/ASIN/B017IPBME2?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
d7984225-7237-4f17-8849-59e7491b4684	93b2acae-f114-4045-a968-e22488cf2789	100%CFDホエイプロテイングルタミンプラス マッスルビルディング	https://www.amazon.co.jp/exec/obidos/ASIN/B017IR7QE0?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
b5b7ac01-bff8-41f6-95c5-5b14a5db386e	93b2acae-f114-4045-a968-e22488cf2789	100%CFDホエイプロテイングルタミンプラス スーパーデリシャス	https://www.amazon.co.jp/exec/obidos/ASIN/B077VJTYC7?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
06c67530-27ff-4c1c-8e1f-4e4933241d57	93b2acae-f114-4045-a968-e22488cf2789	BIG 100% ホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B00K80457G?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
7eb70c85-7a15-4a3b-9e4a-17584db032c1	93b2acae-f114-4045-a968-e22488cf2789	パワーボディ100% ホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B075N7XH1M?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
df36809c-96da-4758-af44-8b54592f1733	b7fa1223-5b07-481c-be3c-6c0c24117619	ホエイプロテインピュアアイソレート	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1H94U?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
4401cdb8-a864-4f16-8b8b-45138ca265a2	964f567f-2a71-40ab-aa25-29a04d11ba56	ホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B0792SZGFQ?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
10ab8d18-68db-4a66-a7cc-5fa7c24b0144	964f567f-2a71-40ab-aa25-29a04d11ba56	マックスロードホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B00SKI48HA?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
98353fe0-1e9e-4905-8754-f751e75e7ad3	964f567f-2a71-40ab-aa25-29a04d11ba56	マックスロードウエイトアップ	https://www.amazon.co.jp/exec/obidos/ASIN/B0792T5NZ3?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
34db01de-ad17-499d-9feb-24ffe90ab089	d17d0e1f-3ed3-4b22-838e-21380779a354	チェイス	https://www.amazon.co.jp/exec/obidos/ASIN/B010SEAKW0?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
21e0baf4-ae11-44fd-bd77-d24c30ee7141	ad1348b1-0f56-47ec-a84f-944d1b1bb120	エクステンドプロ アイソレートホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B07JH3YQPS?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
de59009c-d063-479a-a73b-410a1adaf8fb	bdeedf8c-5b7e-4765-8d12-62524b345c80	プロテインホエイ100	https://www.amazon.co.jp/exec/obidos/ASIN/B07QCRCVC8?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
198635df-0c84-461a-92e6-a61410dd3795	e5fc892f-25de-441e-b050-7a6c6c1bfd49	ホエイプロテイン100 WPI	https://www.amazon.co.jp/exec/obidos/ASIN/B086ZB7WGW?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	087482e1-70e2-4b13-8275-e576b96a6d8e	WPCホエイプロテイン100	https://www.amazon.co.jp/exec/obidos/ASIN/B07P1KMS4C?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
32da625e-9586-4c6a-a8e9-5693378b740c	087482e1-70e2-4b13-8275-e576b96a6d8e	WPCホエイ グラスフェッド プロテイン				2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
31956445-5776-484a-b3ca-f9ca6d88764e	087482e1-70e2-4b13-8275-e576b96a6d8e	AMAZON限定 WPC100プロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B07NVFVMQB?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
96f6c517-3e7b-43fa-8997-48b430723835	b7fa1223-5b07-481c-be3c-6c0c24117619	ホエイプロテインコンプリート	https://www.amazon.co.jp/exec/obidos/ASIN/B005JASWTC?tag=protein-review-22			2020-12-31 17:46:50.532757	2021-01-08 22:13:58.797254
76f3a370-b4b5-4ace-81f0-d84303432dc4	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	WPCナチュラルホエイプロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B078HDHC7L?tag=protein-review-22			2020-12-31 17:46:50.532757	2021-01-03 04:39:21.355587
8b2f81c0-4252-4730-8e7f-b26c63be725b	448043fe-d423-4f6c-aeaa-408f7d5682ac	100%ナチュラルホエイプロテイン				2020-12-31 17:46:50.532757	2021-01-27 02:07:06.042607
0f04f7a9-20ea-473d-ad2e-f9acd586feee	e5fc892f-25de-441e-b050-7a6c6c1bfd49	ウェイトアッププロテイン	https://www.amazon.co.jp/exec/obidos/ASIN/B085L9PMB3?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
eaf33374-2f96-481d-8181-30f7dd914426	e5fc892f-25de-441e-b050-7a6c6c1bfd49	ホエイプロテイン100 ベーシック	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXPMD4S?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	Impact ホエイアイソレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
8b7c0305-9b9c-4246-9b35-0112506d5e3f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	THE ホエイ プラス		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthe-whey%2F11766315.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
e819e08b-a616-402c-a706-c7a923d8f27c	6289763a-0f77-4a0a-a942-d5590375cebc	ビーレジェンド プロテインWPI	https://www.amazon.co.jp/exec/obidos/ASIN/B076D7Q484?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:47:00.072473
61f39391-debf-4625-97ea-db784d3cc03d	7e8b2bca-404d-45da-a05f-fbf5e3024634	CFMホエイプロテイン+ホエイペプチド＆ビタミンB群	https://www.amazon.co.jp/exec/obidos/ASIN/B004MWAHQ4?tag=protein-review-22			2020-12-31 17:46:50.532757	2020-12-31 17:52:06.950266
52a0816b-1aeb-4609-9705-de48c774c7e5	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	クリア ホエイ アイソレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fclear-whey-isolate%2F12081395.html%3FapplyCode%3DABKN-R3		2021-01-10 07:25:00.737809	2021-01-10 07:25:00.737809
a97def5c-9e7f-4fc0-859d-3a8988556f13	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	Impact ホエイプロテイン		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein-limited-edition-flavours%2F11790616.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:46:50.532757	2021-01-12 16:42:21.920784
\.


--
-- Data for Name: product_variations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_variations (product_variation_id, brand_id, product_master_id, flavor, url_amazon, url_myprotein, url_iherb, created_at, updated_at) FROM stdin;
272825de-7cde-4b89-9179-6dab7c557901	7e8b2bca-404d-45da-a05f-fbf5e3024634	61f39391-debf-4625-97ea-db784d3cc03d	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B000SNI9F2?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
07453c83-bd30-45fe-aa2e-c5e94f94b3ba	7e8b2bca-404d-45da-a05f-fbf5e3024634	61f39391-debf-4625-97ea-db784d3cc03d	リッチミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B000FTDUP8?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8b766987-a853-4a1e-9b83-5f6458f895b9	7e8b2bca-404d-45da-a05f-fbf5e3024634	61f39391-debf-4625-97ea-db784d3cc03d	ダブルチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B001339HD4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
05a9bef4-4264-4f03-9a52-db093d8b51da	7e8b2bca-404d-45da-a05f-fbf5e3024634	61f39391-debf-4625-97ea-db784d3cc03d	ミックスベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B002EEQ3V0?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
50224c0e-6e52-4b16-8cd8-be6cf485c7b0	7e8b2bca-404d-45da-a05f-fbf5e3024634	61f39391-debf-4625-97ea-db784d3cc03d	バナナシェイク	https://www.amazon.co.jp/exec/obidos/ASIN/B004MWAHQ4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
175d796a-6632-4111-8121-452ec0a58de1	7e8b2bca-404d-45da-a05f-fbf5e3024634	2f58d1fd-3365-447d-9b18-501fc9712c81	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B00865BT74?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d0be1a93-1846-4547-ba53-664596931523	7e8b2bca-404d-45da-a05f-fbf5e3024634	671a6f47-4fbc-408c-8acb-7d43f172d255	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B00865BT0Q?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ee4a3a1d-ed52-4dda-a6a5-e304b94b6d23	7e8b2bca-404d-45da-a05f-fbf5e3024634	2f58d1fd-3365-447d-9b18-501fc9712c81	ヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B00865BSRA?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8b90a388-028b-4722-9f0a-97ba3bab71e9	7e8b2bca-404d-45da-a05f-fbf5e3024634	2f58d1fd-3365-447d-9b18-501fc9712c81	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B00Y6AT9LG?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
41f95d29-4e59-4399-be09-80fb9c878f44	7e8b2bca-404d-45da-a05f-fbf5e3024634	2f58d1fd-3365-447d-9b18-501fc9712c81	カフェオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B01N2B6UM1?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
27482543-7e52-4d5e-80d3-567b15550a72	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B086R2N97L?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
dd73076c-abe0-404e-9c8e-14649776b3f4	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	ココアミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B086PKV8HY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ea4f9a07-4830-4789-a578-e0b881b3fcd4	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	イチゴミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B086R2MV7S?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6d83835a-facf-44cf-8dcb-07261ddbe251	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	バナナミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B086R2P9DF?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8183ba1f-aa79-4b29-8b8a-31490a71d342	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	フレッシュミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B086R262DP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2e11bab5-0482-468d-953d-37d631350bef	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	バニラアイス	https://www.amazon.co.jp/exec/obidos/ASIN/B086PK3SK5?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b1fdcedc-d4c4-4cee-98b7-08d06991dfe9	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	モモアイス	https://www.amazon.co.jp/exec/obidos/ASIN/B086R26293?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
317265a0-92ba-44db-901e-0a5a46fd96a9	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	ブルーベリーミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B0871ZTQLD?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
23fabe62-ab44-4daf-a7ab-823bea26c610	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	ティラミス	https://www.amazon.co.jp/exec/obidos/ASIN/B0871ZVLR4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fb46290e-1848-429e-976b-b547d269d8c2	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	ストロベリーショートケーキ	https://www.amazon.co.jp/exec/obidos/ASIN/B08721L37H?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4fc180d6-494d-4f15-88dc-08e031e34707	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	アーモンドチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B00WFRY5HU?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f596233e-9cbf-4716-ae5e-2ae1b7facc2a	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ノンフレーバー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e15cc64f-46bd-4fcb-969f-e7710a059a45	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	アップルクランブルとカスタード		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
43d3497d-211a-4fb5-a6aa-e30b64df75fe	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	オレンジクリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
179e6e3a-449d-42d3-9a86-d7d97b1e85a2	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	クッキーとクリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
cf02825e-464b-4909-aaa9-ccd1d695ec22	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	コーヒーキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5042cee9-7b92-42b0-b608-983c5bc13d9a	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	ココシリアル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
51fa58a5-a7a2-45ea-b4c5-b199c5844b8f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ゴールデンシロップ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
65821bdc-bec4-4e0f-ad66-4024d4af0b7e	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	サマーフルーツ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3c999625-4643-443b-9160-efd0f80d0cc0	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	シナモンデニッシュ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2b097aae-9b96-4f02-ae18-e82fd69a3c2c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	スティッキートフィープディング		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
9b25c2ce-297a-4d5c-bacc-1d7d1c5e1920	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - ストロベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e7bc13ec-5670-4ce0-af82-25c2852cee57	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - チョコミント		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a4c951a1-d5e5-4249-8e02-61f3c4d6796f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - チョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e37a2ecf-95e8-484b-afdf-0cca53d95a5f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - バナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b7f75cf4-7d3a-492a-b378-31fd699d465c	5a4472d5-1f88-46e4-af29-85623827f60e	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B00IEA4UK4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1bcb942a-e3e5-44d6-821f-d2f6e9730f00	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - バニラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
dfd70edf-df62-4877-a8fb-29ff6131103f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ステビア - ブルーベリーとラズベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
416ab621-755f-4654-8aeb-1d3579c8bac6	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ストラッチャテッラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
77d29d40-e3cb-4fc1-b9e3-b37ab32c91a7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ストロベリークリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
14b42854-be8e-4437-b274-804ece86e634	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ストロベリージャム・ローリー・ポーリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
71e49a2d-f544-47b3-b744-2a4d92ec750a	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ソルティッドキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
54d1880e-aa49-4849-ba3b-fbdd76465ef1	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	タフィー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fdd53e35-1b4d-4b13-b351-e8d3d15e6024	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコバナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2499a488-996a-4fb6-844d-f6501db42bdd	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコミント		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6a797791-cd5c-4eb1-a1dc-a64ec17669a0	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートオレンジ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
51358e48-efd4-4b41-bcce-c360efe797c1	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
992126c2-370f-431c-a466-3781ed644592	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートココナッツ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
9c6ef8dc-ab20-4788-8450-6b080dcd4df5	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートスムーズ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3af2407a-e35f-4940-b14d-302d215184f1	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートナッツ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bbd2ddbe-bedf-4eff-b26f-a424ab7af20d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートピーナッツバター		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d385c8db-399a-4b36-9507-3f9d053c4b68	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チョコレートブラウニー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
db72eca4-bf31-4327-9324-f9126a06afb1	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ティラミス		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
efc5439e-2dd3-453b-b80e-94fd4c2d506b	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ナチュラルストロベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
76ed714c-7086-4070-951d-e37bccf3e214	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ナチュラルチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
42bc3db3-b5de-4aec-915d-2d7297bb8ca8	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ナチュラルバナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f5a301df-bf16-4444-b5cb-c22f26977df6	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ナチュラルバニラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a042b7d1-2b23-4f5f-a3d5-cd7b6499412e	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	パイナップル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d1888dcb-504c-49b5-af0e-7c6bd814d4f3	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	バナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0f8dd2ca-d2d3-4ec3-b1c0-c6538abaca38	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	バニラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
54b1fae6-355f-4b0d-9e36-655430c7a3ee	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	バニラ＆ラズベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c72e4d4d-42bb-4859-a317-3382a6065fc7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	バノフィー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1f4e2a0b-02df-4beb-ac62-d9b5a6b67c4d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	ピーカンパイ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
56f8c0c5-46eb-400c-af19-db8cc572a853	5a4472d5-1f88-46e4-af29-85623827f60e	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B00IEA5210?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f15ef767-3bb9-4c13-a526-10afeb4919b3	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ピーチティー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3ab666b4-84cb-4324-9b8f-ee14c2184b71	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ブルーベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a0d3e659-02ad-48a5-889c-67b03256e2bd	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ブルーベリーチーズケーキ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b48f9d89-1d2e-4ee1-931c-35215041ec39	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ホワイトチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
709ba4a0-0570-4dbc-b1f4-8597d6c3d3c3	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	メープルシロップ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2c869342-5aa2-438d-a670-daf8c670c177	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	モカ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
02f6aa54-b921-474b-8137-8e1069af2c8d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ラズベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
946712e8-e0a4-4f29-967f-0ee809e2a0f5	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d33f832a-fe4c-4ee2-a96a-3c1a7b42655c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	ルバーブ＆カスタード		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fb5c30b2-f966-44a7-8fa6-f21d58d5904e	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	53bb2786-64ec-49cd-880a-bc80aa385bd4	レモンチーズケーキ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
810074e6-eb1b-4b42-a188-128dda9680ee	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ロッキーロード		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5bf7329f-a675-42d6-8b80-7548344c6a8f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	抹茶		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fabd3e06-0b6b-48cf-8e08-8bb981c9bc3d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	ストロベリーミルクシェイク		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
174da13a-9e79-44c6-b879-e84392951026	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	ソルティッドキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
80e7c485-dd2b-43fc-a89c-53696f87ef5a	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	チョコレートキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e8b9e58c-2c4f-4a86-ab58-5517ecd1bda9	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	バニラクリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
15932bc4-1dd2-4fa1-a41c-e38c7969674e	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	ミルクチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3aed4a78-13df-47a4-a957-ba8c10745ce7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	抹茶		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4c10a4b4-fe39-4c91-b8bd-e1fee0449a9a	2596f7ee-06e4-4cc0-a2b1-2969b3a4d24c	2f2d8b6a-c1fc-43e8-bf1c-508ea35727e6	ミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B0067VIQPM?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ea0b9664-4d56-49d1-b8bf-db251052c888	2596f7ee-06e4-4cc0-a2b1-2969b3a4d24c	2f2d8b6a-c1fc-43e8-bf1c-508ea35727e6	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B0067VIO2C?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0f6b88b7-4dc3-4cd2-82b7-29f16de2ab92	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ナチュラル（さわやかミルク）	https://www.amazon.co.jp/exec/obidos/ASIN/B0060GI8DE?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bdc0be64-9e7a-4d96-b056-9126e81e7f4a	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	激ウマチョコ	https://www.amazon.co.jp/exec/obidos/ASIN/B0090V7WPG?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3b90b31e-dc88-4c59-9d4d-033d8166b259	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	すっきりんご	https://www.amazon.co.jp/exec/obidos/ASIN/B0090VJA1K?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
41c24ff2-04ab-4f22-b985-c91960859120	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	南国パイン	https://www.amazon.co.jp/exec/obidos/ASIN/B00C3AH7PG?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ad463f75-3013-468a-8b2e-f6d6f832f55b	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	そんなバナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B013DK18AY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4639b1fa-f389-4302-85a4-1fd4fb4c84ca	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	キャラメル珈琲	https://www.amazon.co.jp/exec/obidos/ASIN/B01DD0LMKK?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
692f4008-3209-4390-a7e1-c5433ab135c7	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ベリベリベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B01FRT7D4E?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5b8bfa1f-3248-43f0-b7f8-4789b7f4d56e	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	情熱のパッションフルーツ	https://www.amazon.co.jp/exec/obidos/ASIN/B01N16AC64?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
85bd70bd-cf18-44e4-92ea-4123ad7b4777	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	一杯飲んどコーラ	https://www.amazon.co.jp/exec/obidos/ASIN/B06VSQQJRH?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
83808260-8216-4854-9790-da0ccad0edb2	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	抹茶のチャチャチャ	https://www.amazon.co.jp/exec/obidos/ASIN/B06X1F3SQW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d40a5fb4-87e0-4683-aceb-8ef6391abdad	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	めろめろメロン	https://www.amazon.co.jp/exec/obidos/ASIN/B06X6LRDP9?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bb46ea75-48de-4839-bf7f-a75c37fd06c1	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	初恋のいちご	https://www.amazon.co.jp/exec/obidos/ASIN/B074X2GC52?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
cce9f6e8-88d0-426f-b50a-7ebaf6c4d79a	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ぴちぴちハッピーチ	https://www.amazon.co.jp/exec/obidos/ASIN/B075DV6RX4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d386cd46-8995-4c7e-b8e7-fedf786657b8	6289763a-0f77-4a0a-a942-d5590375cebc	06ece172-8670-4eb1-bc7f-0c378d6b5510	熊本みかん	https://www.amazon.co.jp/exec/obidos/ASIN/B071NLL3WW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d015ae43-9c6c-4746-acc9-c40b5d61a645	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B01N209M13?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1330a815-ca23-4471-9c58-46f03afcb0e9	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B01MY65DYF?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
be796376-d362-4995-962c-c1cdc0343f74	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	メープル	https://www.amazon.co.jp/exec/obidos/ASIN/B01N7Q4VMQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1addfbe7-e102-4c62-a146-eac6f76a8893	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	杏仁豆腐	https://www.amazon.co.jp/exec/obidos/ASIN/B06XCR87Z7?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
93da6286-242b-40bc-ab9a-45a5c2b802c3	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	カフェオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B06XC9T1YK?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
03cc8830-bab9-4a4c-b115-2c8e9ea254da	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ピーチ	https://www.amazon.co.jp/exec/obidos/ASIN/B06XCLKZXH?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6b516405-7b2c-4e6b-986f-c11f4f4b375e	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ミルクチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B06Y69FKT2?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d8c368e2-056e-4828-babb-a23385169f69	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	フルーツオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B075F41D8Q?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
622e0678-f887-4f16-91ac-740c99e729ac	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ミント	https://www.amazon.co.jp/exec/obidos/ASIN/B075F3TSG3?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bec26fa9-ce75-4214-abdd-f1fbba9b9bd1	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	甘酒	https://www.amazon.co.jp/exec/obidos/ASIN/B075FMRW8X?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
eba73edc-c56f-430a-90cd-5491d45c9c76	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B078WNFXQQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0f5b74c5-d9fc-4071-8ee8-70abd5a2ab66	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	カフェオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FB2M?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
09cefa25-cc64-4e16-b680-ab7e71bf7e63	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	マンゴー	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FJ0G?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
307359b5-5198-4df5-9861-0a24a340800a	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FB68?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5c2265c3-59cb-4d74-b268-2a3641fcf80b	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FAVY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e95a7740-0bcd-40fa-bdac-2b331a956dbc	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FISY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6fb92f41-5cc6-4002-a01a-0f6ce7d82ce0	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B00KQ9FB4A?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b3320cef-a036-4d68-a55a-13c257bdd403	bdeedf8c-5b7e-4765-8d12-62524b345c80	5b24f9ed-b566-412b-86f5-91def082e066	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B0874TP8TP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
9e83bbb4-6852-4771-943d-efe59bb56cdd	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	レモン	https://www.amazon.co.jp/exec/obidos/ASIN/B013T1OBEC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b1f34993-c2c1-4961-806b-da95ae8317d2	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B016Q9VYAI?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0f3d8d96-ac51-4ddf-9412-fb04bdb025e6	bdeedf8c-5b7e-4765-8d12-62524b345c80	b9eb9ff1-50c6-4933-b2a7-124869f92a18	ミルクティー	https://www.amazon.co.jp/exec/obidos/ASIN/B001BAS1JK?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
143016fb-d93b-4225-b31f-1ba0b0cfa7e5	bdeedf8c-5b7e-4765-8d12-62524b345c80	b9eb9ff1-50c6-4933-b2a7-124869f92a18	ダブルベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B01J5MYSEW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1dd73b2c-8c2c-4975-95ba-6daf4af6b2cc	bdeedf8c-5b7e-4765-8d12-62524b345c80	b9eb9ff1-50c6-4933-b2a7-124869f92a18	ショコラ	https://www.amazon.co.jp/exec/obidos/ASIN/B001BAO05E?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
9f373298-3c1a-4652-84a4-1a4f47f98fb6	bdeedf8c-5b7e-4765-8d12-62524b345c80	cf168b6d-dc85-4e63-8bda-7c17187c1fb9	ミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ303HG?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
086617a9-54d8-499c-bc96-ac27296725a5	bdeedf8c-5b7e-4765-8d12-62524b345c80	095caeea-053d-449f-be30-563c3ef8030e	エスプレッソ	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ30498?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
300f75c6-815a-4c9b-a86f-47d88a6c9f28	bdeedf8c-5b7e-4765-8d12-62524b345c80	8d4a5efb-d900-4a3d-8440-6f17862f32ef	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ303UI?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c5028398-ab40-48bb-9373-d3d3d6216b82	bdeedf8c-5b7e-4765-8d12-62524b345c80	095caeea-053d-449f-be30-563c3ef8030e	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ2ZYEO?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
86f09a5e-9436-453e-8fc9-e358fcd844bc	bdeedf8c-5b7e-4765-8d12-62524b345c80	8d4a5efb-d900-4a3d-8440-6f17862f32ef	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B00PQ2ZYCQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4fcab535-d8df-4565-884f-8049cadcf882	bdeedf8c-5b7e-4765-8d12-62524b345c80	7bab6e3a-645d-46a3-9a4c-94f4b5152c75	ヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B01CN3QNKW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
da5631c1-1bd8-42f2-9083-4f6cc5702ce8	bdeedf8c-5b7e-4765-8d12-62524b345c80	7bab6e3a-645d-46a3-9a4c-94f4b5152c75	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B01CN3QMZS?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4be9c311-dfd4-4421-8905-496653514fa1	bdeedf8c-5b7e-4765-8d12-62524b345c80	7bab6e3a-645d-46a3-9a4c-94f4b5152c75	フルーツミックス	https://www.amazon.co.jp/exec/obidos/ASIN/B073BBC2JR?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5f0db634-ae6e-4263-a795-1b4ad781196e	bdeedf8c-5b7e-4765-8d12-62524b345c80	a211f11a-073d-47b7-a2c3-4c8170ceadef	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B06XNJZDL6?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f710a967-6506-4ce5-a0d4-1d09b70b1e12	bdeedf8c-5b7e-4765-8d12-62524b345c80	a211f11a-073d-47b7-a2c3-4c8170ceadef	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B06XKQJ2HH?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b552eba3-cca2-4582-b47e-e4f7297870b3	bdeedf8c-5b7e-4765-8d12-62524b345c80	a211f11a-073d-47b7-a2c3-4c8170ceadef	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B06XKSNFL4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
61c6e594-e201-4f29-a25d-9d07571f5689	bdeedf8c-5b7e-4765-8d12-62524b345c80	2e47fec0-bc8a-4b93-bd5d-016184e5b408	ホワイトチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B077JSCF6L?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4664f945-a3d0-4fcb-a063-488622fd080a	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ブルーベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B078WN8ZYV?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
835c30b8-5872-4116-b3e7-ded088f91396	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	バニラアイスクリーム	https://www.amazon.co.jp/exec/obidos/ASIN/B078RPW7Y3?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4b449aca-093c-4293-9213-6b0a6dee8a67	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	コーヒー			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Coffee-5-lbs-2-27-kg/69588?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0f9be6b8-0305-4ed6-bb7e-1ca553e7d787	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	ストロベリーバナナ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Strawberry-Banana-5-lbs-2-27-kg/27513?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2f31815e-90c3-43e2-a9a6-9a939490889c	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	おいしいイチゴ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Delicious-Strawberry-5-lbs-2-27-kg/27507?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a5c9233b-ac3b-4fd5-8aa1-9318219004f4	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	塩キャラメル			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Double-Rich-Chocolate-5-lbs-2-27-kg/27509?refid=f9548ff6-c926-4553-a1e3-2e42ad3357ec&reftype=rec&rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
7cfe62b7-8fcc-4b1b-9dd8-dc8a1c7a4928	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	ロッキーロード			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Rocky-Road-5-lbs-2-27-g/27512?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bb647424-b38f-44ee-8c7e-dfdc5ec63eef	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	クッキー&クリーム	https://www.amazon.co.jp/exec/obidos/ASIN/B00MJ4OKRO?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b671f952-d4db-4978-98a9-4d64dfdba477	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	チョコレートミント			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Chocolate-Mint-5-lb-2-27-kg/27505?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3beb3f1b-8179-4c2f-bd5e-616dc6c6cc9c	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	ケーキドーナッツ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Double-Rich-Chocolate-5-lbs-2-27-kg/27509?refid=f9548ff6-c926-4553-a1e3-2e42ad3357ec&reftype=rec&rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6e49b3d1-a860-4daa-9519-8d2e917b4d66	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	ダブルリッチチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B07B33QR7C?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
91f7adc5-cadd-4ad8-8218-fa1d8ae554a9	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	ケーキバター			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Cake-Batter-5-lbs-2-27-kg/27503?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
12c1611d-33cb-4bb8-b225-3b38eaf1f024	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	バナナクリーム	https://www.amazon.co.jp/exec/obidos/ASIN/B078RQVY3X?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
7f5953b8-93b1-4d5e-9da5-8f5e36b2ce38	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	モカカプチーノ	https://www.amazon.co.jp/exec/obidos/ASIN/B001CYZ4GI?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
50a5c7cc-845e-435f-a2aa-9ddd192eb41e	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	フレンチバニラクリーム			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-French-Vanilla-Cr-me-5-lbs-2-27-kg/27511?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
071f4cad-d363-4c13-89fb-b03dc1d4a188	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	エクストリームミルクチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B079DKJ8PH?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
475af05f-a5b1-45f1-9cd7-a36e476b8e21	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	チョコレートココナッツ			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Chocolate-Coconut-5-lbs-2-27-kg/69590?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
65eaa1ba-2289-4cbb-8b8c-0aac40343295	56354046-6ea6-47d1-8814-71b5b375181b	6acba276-1988-4b0b-9165-048bfe266bc3	チョコレートモルト			https://jp.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-Chocolate-Malt-5-lbs-2-27-kg/27504?rcode=KCG536	2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
9495ecc7-fb6a-4b97-ae61-de638ff3f6c9	7e8b2bca-404d-45da-a05f-fbf5e3024634	2f58d1fd-3365-447d-9b18-501fc9712c81	クッキー＆クリーム	https://www.amazon.co.jp/exec/obidos/ASIN/B06XWW8YYM?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
cfb2fba8-d6d7-4fa7-924f-d3bcef8cc94c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	マジパン		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c593efaf-7ca7-4ea1-873c-0981c4aa8aa4	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	スペキュロス		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
7e11071a-d495-425d-8640-cdc07e70a380	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ミルクティー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3Fvariation%3D11571206%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6eaa893e-460c-4af1-bc9e-8d0158810e9d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	バナナクリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
62dc0fd1-1020-42d8-90f1-af5f50c6ca17	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ココナッツ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
043637d3-046c-49fd-830e-fe549cf52767	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ピスタチオ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
170a0f2b-544e-4232-ac32-7b9f1aa2c83c	8341e911-be5b-44e5-ae3e-a6e4914bbeae	4339f516-0f39-4b15-8057-bba5db700f9d	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B07D8HM32Q?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
dccc0ecd-6876-4366-8f93-a84ce3dd4073	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	76f3a370-b4b5-4ace-81f0-d84303432dc4	無添加	https://www.amazon.co.jp/exec/obidos/ASIN/B078HDHC7L?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a28a0f67-ab1d-4f68-a9bc-fea286b3ee91	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	d8ffe0f3-421f-400f-9d9c-ad85af8921a7	ココアミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07BT2LV6L?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8e058666-06eb-4ca6-b235-85e103d8e92c	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	d8ffe0f3-421f-400f-9d9c-ad85af8921a7	イチゴミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07BSYCDCG?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f3f2ba1f-bc70-4cc1-b126-c0f9bf058e4f	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	d8ffe0f3-421f-400f-9d9c-ad85af8921a7	カフェラテ	https://www.amazon.co.jp/exec/obidos/ASIN/B07FQBQG9X?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
cc67b5e5-b2a6-480a-a48a-3c671acddaa7	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	d8ffe0f3-421f-400f-9d9c-ad85af8921a7	チョコバナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B07FQ7QS3X?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1cbef1ce-3a36-4ff3-af20-e8bae4db86b2	ba5eb8b3-3453-4a83-bd5e-3b32764fdfab	d8ffe0f3-421f-400f-9d9c-ad85af8921a7	モンブラン	https://www.amazon.co.jp/exec/obidos/ASIN/B07H3LWCKP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
00434ba2-c38e-4735-aeb0-2c04765cc8d0	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ココナッツミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07DN6DS4C?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1e71b5f0-5d88-443c-9187-d52aa9c3cc91	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	ブラッドオレンジ	https://www.amazon.co.jp/exec/obidos/ASIN/B07FNC32Y4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b8bb12cd-2eeb-4cb0-89b7-e0d7a6d9f55c	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	メロン				2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
580e454b-3216-4b24-b19f-2f01081a31b4	448043fe-d423-4f6c-aeaa-408f7d5682ac	8b2f81c0-4252-4730-8e7f-b26c63be725b	フランボワーズ				2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f432a8b3-5ab9-4fca-9193-da9b2dd2cc11	93b2acae-f114-4045-a968-e22488cf2789	9f52a772-a284-4075-8387-1e139ad90fb5	スーパーマッスル	https://www.amazon.co.jp/exec/obidos/ASIN/B017IPBME2?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c04208ee-31fc-4e42-8dcf-3091a2bff1a7	93b2acae-f114-4045-a968-e22488cf2789	d7984225-7237-4f17-8849-59e7491b4684	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B017IR7QE0?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fdcf08bb-7ee9-41c3-a9f7-ffb9cf6f3daf	93b2acae-f114-4045-a968-e22488cf2789	b5b7ac01-bff8-41f6-95c5-5b14a5db386e	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B077VNBB8V?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d927a9a4-6943-4751-b0a5-f965bd61d699	93b2acae-f114-4045-a968-e22488cf2789	b5b7ac01-bff8-41f6-95c5-5b14a5db386e	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B017IRMWQW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
606a7cfe-eace-4645-86fc-415804d406fa	93b2acae-f114-4045-a968-e22488cf2789	b5b7ac01-bff8-41f6-95c5-5b14a5db386e	アップル	https://www.amazon.co.jp/exec/obidos/ASIN/B077VJTYC7?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
eeb16352-490e-414d-b2d0-30dbcfecd047	93b2acae-f114-4045-a968-e22488cf2789	06c67530-27ff-4c1c-8e1f-4e4933241d57	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B00K80457G?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
debf765b-3358-4fdd-ad7b-43275fa36303	93b2acae-f114-4045-a968-e22488cf2789	7eb70c85-7a15-4a3b-9e4a-17584db032c1	ミルクチョコ	https://www.amazon.co.jp/exec/obidos/ASIN/B075NFFCHX?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
62fb0bae-afdb-4ab9-8c1e-4a55cb70cedc	93b2acae-f114-4045-a968-e22488cf2789	7eb70c85-7a15-4a3b-9e4a-17584db032c1	バナナラテ	https://www.amazon.co.jp/exec/obidos/ASIN/B075N8Y5NM?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
25791be0-9162-49f5-ab91-5cbbd0db070e	93b2acae-f114-4045-a968-e22488cf2789	7eb70c85-7a15-4a3b-9e4a-17584db032c1	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B075N7XH1M?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
22f68c09-eef6-4a08-bab7-c7183e3b53a2	b7fa1223-5b07-481c-be3c-6c0c24117619	df36809c-96da-4758-af44-8b54592f1733	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1E6V4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0cbd1db4-e536-4444-9e16-8960334b56c3	b7fa1223-5b07-481c-be3c-6c0c24117619	df36809c-96da-4758-af44-8b54592f1733	ミルクココア	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1E588?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f37eae47-8e0c-44b8-9953-fa18d1646695	b7fa1223-5b07-481c-be3c-6c0c24117619	df36809c-96da-4758-af44-8b54592f1733	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1E4GQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
62e64425-ae4d-493c-b041-cfe9a6e2331d	b7fa1223-5b07-481c-be3c-6c0c24117619	df36809c-96da-4758-af44-8b54592f1733	メロン	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1H9MW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2cc8fb4a-5794-436f-8c70-a9e78eb15ebe	b7fa1223-5b07-481c-be3c-6c0c24117619	df36809c-96da-4758-af44-8b54592f1733	ミックスフルーツ	https://www.amazon.co.jp/exec/obidos/ASIN/B000T1H94U?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0e0ce08d-c85d-42fe-b15b-876cded2d1c6	b7fa1223-5b07-481c-be3c-6c0c24117619	96f6c517-3e7b-43fa-8997-48b430723835	キャラメルラテ	https://www.amazon.co.jp/exec/obidos/ASIN/B005JASX3M?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
28ca3519-bba4-4947-9e6b-12ba8c1ba1d8	b7fa1223-5b07-481c-be3c-6c0c24117619	96f6c517-3e7b-43fa-8997-48b430723835	ピーチオレンジ	https://www.amazon.co.jp/exec/obidos/ASIN/B005JASXS2?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
12820f1e-057d-4f39-a7c2-c92f779d4f83	b7fa1223-5b07-481c-be3c-6c0c24117619	96f6c517-3e7b-43fa-8997-48b430723835	プレミアムバニラアイス	https://www.amazon.co.jp/exec/obidos/ASIN/B005JASXK0?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
55fcf1ef-d71d-4411-b8f0-223f4f2959b3	b7fa1223-5b07-481c-be3c-6c0c24117619	96f6c517-3e7b-43fa-8997-48b430723835	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B005JASWTC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ba41d4ab-e0b9-4f1e-872f-f63c4324acab	964f567f-2a71-40ab-aa25-29a04d11ba56	4401cdb8-a864-4f16-8b8b-45138ca265a2	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B0792SZGFQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
162189d1-f6eb-4eeb-8e20-da35e97c005a	964f567f-2a71-40ab-aa25-29a04d11ba56	10ab8d18-68db-4a66-a7cc-5fa7c24b0144	サワーミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B00SWA9ZDI?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fcb4b1cf-8171-4be5-b1ac-0048c8c8eae6	964f567f-2a71-40ab-aa25-29a04d11ba56	10ab8d18-68db-4a66-a7cc-5fa7c24b0144	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B00SKI43T8?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f8d6a492-49d9-435f-966c-0d4f2c4beeb6	964f567f-2a71-40ab-aa25-29a04d11ba56	10ab8d18-68db-4a66-a7cc-5fa7c24b0144	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B00SKI48HA?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
79675c66-389d-4da5-9265-436d2118d935	964f567f-2a71-40ab-aa25-29a04d11ba56	98353fe0-1e9e-4905-8754-f751e75e7ad3	チョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B0792T5NZ3?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a7ac3499-7c15-46fd-b67f-17b2871f32d8	d17d0e1f-3ed3-4b22-838e-21380779a354	34db01de-ad17-499d-9feb-24ffe90ab089	ストロベリージェラート	https://www.amazon.co.jp/exec/obidos/ASIN/B00YU1YB1O?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
86c8a51b-d3d3-4ce9-8838-6ed28185a4d8	d17d0e1f-3ed3-4b22-838e-21380779a354	34db01de-ad17-499d-9feb-24ffe90ab089	アーモンドチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B010SEAKW0?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f905d137-45e0-4efc-98ac-dfba396a254d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	北海道ミルク		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3Fvariation%3D11884248%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c387b751-e276-4174-b4fc-ca44a5dceb47	ad1348b1-0f56-47ec-a84f-944d1b1bb120	21e0baf4-ae11-44fd-bd77-d24c30ee7141	チョコレートラバケーキ	https://www.amazon.co.jp/exec/obidos/ASIN/B07JGHS5LC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6f98e1bd-8892-4213-a63e-169b89d7fd5f	ad1348b1-0f56-47ec-a84f-944d1b1bb120	21e0baf4-ae11-44fd-bd77-d24c30ee7141	バニラアイスクリーム	https://www.amazon.co.jp/exec/obidos/ASIN/B07JGQZSFS?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fc8a6f27-a05d-4e22-bb50-77798af3af27	ad1348b1-0f56-47ec-a84f-944d1b1bb120	21e0baf4-ae11-44fd-bd77-d24c30ee7141	クッキーバター	https://www.amazon.co.jp/exec/obidos/ASIN/B07JWQDVS9?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
26cd1b98-254c-4e41-a5af-ade377b70911	ad1348b1-0f56-47ec-a84f-944d1b1bb120	21e0baf4-ae11-44fd-bd77-d24c30ee7141	サルトカラメルシェイク	https://www.amazon.co.jp/exec/obidos/ASIN/B07JH3YQPS?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
06ed6522-9e58-4e91-becb-7c7d0771a387	8341e911-be5b-44e5-ae3e-a6e4914bbeae	101fd983-6cf8-43b9-b706-7fe76362ea83	メロンアイス	https://www.amazon.co.jp/exec/obidos/ASIN/B088WFJJ4K?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
663bcf78-15e9-4420-b2a2-29df921c1d22	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	カフェオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B07QCRD3TC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
af3ce812-310d-4b00-b0fa-5cf20526cbc9	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B07QFT5G79?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
7848cfb4-0c48-4a67-9c21-efaaef66b550	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	レモン	https://www.amazon.co.jp/exec/obidos/ASIN/B07QK418LJ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
aae1a7b7-79a4-4a93-8405-d0229545e405	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	プレミアムチョコ	https://www.amazon.co.jp/exec/obidos/ASIN/B07QFT5BJ9?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
60761259-5477-442f-8bc2-4dbadaef2f69	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	リッチバニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B07QGY16KK?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6ec1ca31-ce70-43d3-9637-e92ad981f7ff	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	いちごミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07QDQ4R49?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3a18ddea-ef28-4362-87ee-a6d825b65d4e	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	バナナオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B07QK46BHX?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d943a83c-b2ca-408a-8935-2e0bb6434624	bdeedf8c-5b7e-4765-8d12-62524b345c80	de59009c-d063-479a-a73b-410a1adaf8fb	トロビカルマンゴー	https://www.amazon.co.jp/exec/obidos/ASIN/B07QCRCVC8?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a4f30cdf-d5c4-4478-8855-de6c5f77c007	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	抹茶ラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3Fvariation%3D12098080%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
011da326-731a-4af0-a22f-473666dfde6a	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B0851VD5KY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a9e0f3f9-7b2e-412d-9cc6-c6a951ff5b97	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B0851VRY7L?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1f879252-13e0-4b57-8bf8-725e62689452	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	ストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B085ZG2X77?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2f01114f-3966-43a4-85e7-0379c6957de8	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B085ZZVJD4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2fd03435-5a8a-4fec-9b30-c3aad932ceec	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B0851W4342?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d79ddd6e-3639-455f-af0b-f610ad5500fc	e5fc892f-25de-441e-b050-7a6c6c1bfd49	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B086RGZ3HV?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
66e1e3df-ce18-4856-9635-24648907481d	e5fc892f-25de-441e-b050-7a6c6c1bfd49	198635df-0c84-461a-92e6-a61410dd3795	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B07NYLVZ87?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1be462ee-9cfa-4b1d-a349-c57222b5bb2c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	クッキー&クリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
15204f3d-e56f-4f40-b584-03f9c8bb6e60	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	ピーナッツバターカップ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
dc8f17b5-936d-44e1-8d59-8dd0911180bc	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	リッチチョコレート	https://www.amazon.co.jp/exec/obidos/ASIN/B07P3T75GC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bce7836e-86ba-4c4f-9234-8deaca848ac2	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	プレミアムココア	https://www.amazon.co.jp/exec/obidos/ASIN/B077D4YTPC?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4bea151a-380d-413f-9699-9ba5337a904b	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	リッチカフェオレ	https://www.amazon.co.jp/exec/obidos/ASIN/B075FTG5P9?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e5b25062-a72b-486a-ade5-c4443262b524	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	プレミアム抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B075C6B1D2?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a1468060-4f9e-4363-b5f6-69d8f6a8ad9f	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	チョコバナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B07NYG2BX5?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
448d165e-89df-4d43-885a-7cc61e75906e	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	ストロベリーミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07P2RDF91?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fbe54236-f21f-4e04-82b6-0c2726c0d3c3	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	チョコミント	https://www.amazon.co.jp/exec/obidos/ASIN/B07VMKSWY1?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5ea6ac60-3603-4473-96ea-08178d150e03	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	ミックスフルーツ	https://www.amazon.co.jp/exec/obidos/ASIN/B07V35F6XN?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
229b1797-135b-4c5c-8cdc-90d36c265cb4	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	ブラックチョコ	https://www.amazon.co.jp/exec/obidos/ASIN/B075C4GC48?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fd1aeb8f-457c-4b3c-b141-b2fb7d400252	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	リッチストロベリー	https://www.amazon.co.jp/exec/obidos/ASIN/B075BZTZ14?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ed3ae4c9-a8bb-4249-9f3c-faed2c29df92	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりグレープフルーツ	https://www.amazon.co.jp/exec/obidos/ASIN/B075C4RNWN?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b85f3e9c-cc86-4aa3-8efc-d8e00159c143	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりアップル	https://www.amazon.co.jp/exec/obidos/ASIN/B07NYH5RVW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8b38a0d6-8e56-473f-834d-f54325255a67	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりアセロラ	https://www.amazon.co.jp/exec/obidos/ASIN/B07NZFJG8N?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
81be2891-b4da-40c8-b364-ef8210f604e0	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりグレープ	https://www.amazon.co.jp/exec/obidos/ASIN/B07P2NT234?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ba98331a-81c3-449c-aad5-7f699bc06c41	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B07P1K8PV1?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
05701bf4-3f6f-4f06-b5ea-0dffcafa2073	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	さっぱりピーチ	https://www.amazon.co.jp/exec/obidos/ASIN/B07P2P586P?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
31f9193a-63b1-4780-a7db-d627ff0a01d2	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	プレーン&ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B075C2TNKQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
acf22655-4397-45c4-a022-9a0506d63bd8	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B07P2SR6GP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3687838d-eadf-4b20-afa0-f412e0266319	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	天然ココナッツシュガー	https://www.amazon.co.jp/exec/obidos/ASIN/B075C4TZJ6?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e4c6e821-9327-48fc-9f7f-50c53e84f35d	087482e1-70e2-4b13-8275-e576b96a6d8e	13dd8a87-b0d7-4fa4-91b7-ac2104fdbc30	あっさりミルク	https://www.amazon.co.jp/exec/obidos/ASIN/B07P1KMS4C?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6ec029b9-ed50-4305-b517-20d311bdc02b	087482e1-70e2-4b13-8275-e576b96a6d8e	32da625e-9586-4c6a-a8e9-5693378b740c	プレーン	https://www.amazon.co.jp/exec/obidos/ASIN/B07SQCPVNB?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ad56344a-b103-44fd-aeab-c3501c0cfe15	087482e1-70e2-4b13-8275-e576b96a6d8e	32da625e-9586-4c6a-a8e9-5693378b740c	しっかりココア ステビア	https://www.amazon.co.jp/exec/obidos/ASIN/B07TC2MHPY?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
be135cb4-fe82-4b40-9e20-510e1f8b9440	087482e1-70e2-4b13-8275-e576b96a6d8e	32da625e-9586-4c6a-a8e9-5693378b740c	抹茶				2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
498a461d-f9cc-414e-85fc-61a942acece1	087482e1-70e2-4b13-8275-e576b96a6d8e	31956445-5776-484a-b3ca-f9ca6d88764e	濃厚ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B07NVFVMQB?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
48bab725-f9c3-4a99-a23f-46c2c2125728	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チェスナットチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3Fvariation%3D12229330%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b2a39184-fc69-4abb-bd62-c1d378273f7f	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ダークチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
89944927-68c7-4bfb-9e9a-68ddeae733fd	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ダークチョコレート&ソルティッドキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ec367295-a09b-4da9-b5d5-7afcae1bf1d9	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ジャスティスリーグ スーパーヒーロー コラボ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fjustice-league-impact-whey-protein%2F12272416.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
61842cf6-66b8-4be5-8114-55c5cf90e7a7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ほうじ茶ラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3Fvariation%3D12002879%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b0acdb27-6e0f-48b7-a365-0c190a29fbf9	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	あずき		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
aa6e5dc6-0b98-493e-a5b0-4378936efd25	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チェスナット		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fmyprotein-impact-whey-protein-autumn-flavours%2F11931230.html%3Fvariation%3D11834834%26applyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
703d00c0-c119-418e-a7b4-82f961e72001	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	チェリーヨーグルト		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b3bb0fa5-1513-412b-9228-ce4e55357079	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	ピーチ&アプリコット		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0b72e515-134f-4c3c-88e3-65f32b76354c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	プラム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f2a0f641-62e5-4f6d-83fe-6618a96affe6	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	マンゴー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein%2F10530943.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c8d92e86-9ad0-4195-93cc-f6b302853643	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	a97def5c-9e7f-4fc0-859d-3a8988556f13	赤りんご		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-protein-limited-edition-flavours%2F11790616.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b3c06f91-1602-45c8-a429-463f51c378bb	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ミルキー	https://www.amazon.co.jp/exec/obidos/ASIN/B079FKCQS6?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bf6b1763-636d-456b-a5cc-78758197f490	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ミルキーココア	https://www.amazon.co.jp/exec/obidos/ASIN/B07NWCWQHZ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a13552a5-058e-4df2-9ce3-f77306da8fa6	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	キン肉マン 火事場のクソ力	https://www.amazon.co.jp/exec/obidos/ASIN/B07V2DHX2M?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5e3d443a-c5d0-4aa3-bf07-cd36530cb104	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ストリートファイターV 波動拳	https://www.amazon.co.jp/exec/obidos/ASIN/B07BRFY1ZP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
ea60fb05-500f-4d60-9428-fadaba1c36d5	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	北斗の拳 ケンシロウ 明日への種モミ	https://www.amazon.co.jp/exec/obidos/ASIN/B07SG86ZZD?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
70116bae-70e1-46af-b326-48ca2955556b	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	北斗の拳 ラオウ 我が生涯に一片の悔い無し!!	https://www.amazon.co.jp/exec/obidos/ASIN/B088R82ZSK?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4090cb58-1597-44bf-b2be-04a729fa9684	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ドラゴンボール超 かめはめ波	https://www.amazon.co.jp/exec/obidos/ASIN/B07KGMDSD4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a3a9777b-716e-4b66-95cf-951039071bf2	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ワンピース 悪魔の実風味	https://www.amazon.co.jp/exec/obidos/ASIN/B07X3YKGQ8?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
98d68621-f029-4791-9519-e90073e2a602	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ワンピース チョッパーのわたあめ	https://www.amazon.co.jp/exec/obidos/ASIN/B07WZQLPF8?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
88708fe3-fa8e-48b8-b4a9-82f64dfc0778	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ハローキティ ママの作ったアップルパイ	https://www.amazon.co.jp/exec/obidos/ASIN/B082F8BVFN?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8abfb4e0-d14d-4de6-8051-6688be3393e9	6289763a-0f77-4a0a-a942-d5590375cebc	cda62cf7-f9f5-4c67-9757-71eb80aec907	ガンダム 連邦の白いヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B082F7XBM1?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
42f7ca75-6770-4c1d-a39e-14d17d5f422f	e5fc892f-25de-441e-b050-7a6c6c1bfd49	198635df-0c84-461a-92e6-a61410dd3795	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B086ZBSKXL?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f9e88c82-5244-4b5e-bb52-4299f1b63ed5	e5fc892f-25de-441e-b050-7a6c6c1bfd49	198635df-0c84-461a-92e6-a61410dd3795	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B086Z98QV7?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
3a44a410-7c83-428e-b6e6-1d80e5fe4828	e5fc892f-25de-441e-b050-7a6c6c1bfd49	198635df-0c84-461a-92e6-a61410dd3795	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B086ZB7WGW?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a8f07601-7a89-42f8-a989-5d403918f2e3	e5fc892f-25de-441e-b050-7a6c6c1bfd49	0f04f7a9-20ea-473d-ad2e-f9acd586feee	バニラ	https://www.amazon.co.jp/exec/obidos/ASIN/B085L2MDRD?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
65c36729-0c5b-414a-aadb-321ec1e0578c	e5fc892f-25de-441e-b050-7a6c6c1bfd49	0f04f7a9-20ea-473d-ad2e-f9acd586feee	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B085KVCYYH?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e6309ed3-d1c2-4cbb-8762-2d0d4ee13908	e5fc892f-25de-441e-b050-7a6c6c1bfd49	0f04f7a9-20ea-473d-ad2e-f9acd586feee	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B085L9PMB3?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
31c2097c-29cf-4746-adf8-b2ff628c315c	6289763a-0f77-4a0a-a942-d5590375cebc	e819e08b-a616-402c-a706-c7a923d8f27c	地中海レモン	https://www.amazon.co.jp/exec/obidos/ASIN/B00KBMFYD0?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
f151df79-adc6-4595-b5c6-cc8200ede346	6289763a-0f77-4a0a-a942-d5590375cebc	e819e08b-a616-402c-a706-c7a923d8f27c	みんなの愛すココア	https://www.amazon.co.jp/exec/obidos/ASIN/B076D7Q484?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
0cd2a9a3-2c07-4bb6-b2e1-39cae9e6f4a1	5a4472d5-1f88-46e4-af29-85623827f60e	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	リッチショコラ	https://www.amazon.co.jp/exec/obidos/ASIN/B079Y6SGJ4?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a6a75dcb-6f93-40eb-980e-57bf3b3f8410	5a4472d5-1f88-46e4-af29-85623827f60e	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	抹茶	https://www.amazon.co.jp/exec/obidos/ASIN/B07NPY74W6?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
75ba465a-8159-4ce1-bcd8-fd2b52a2fd2a	5a4472d5-1f88-46e4-af29-85623827f60e	9eaaa53f-1c5a-4dc6-8cf3-6e1acb1fe75b	ヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B07NPXRQQP?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
30f7ebae-14b7-4418-b6c2-32fa3b4d2bba	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	北海道ミルクティー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
67235626-5b92-4776-911b-f6361b23a05b	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	4915626a-6606-4d31-8157-035cf9c6b1f0	抹茶ラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthewhey%2F11353515.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2f5c9cb6-c721-4803-b6db-4aaebc99b13e	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	ナチュラル	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXLQL58?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
2a1bebd0-7b1f-4170-9c04-50a560adae10	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	ココア	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXT1V3Z?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
249a2875-5502-4b4d-91ba-735c5b211bcb	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	フルーツミックス	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXH3LTQ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
03171370-0278-4f69-8b7a-0406d7e45a46	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	メロン	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXMZ6BJ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
b2d99136-510e-4a89-8d59-2dd1e2ee6b11	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	バナナ	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXHX9NZ?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fe133e14-66d9-4b4f-8709-9578c435610b	e5fc892f-25de-441e-b050-7a6c6c1bfd49	eaf33374-2f96-481d-8181-30f7dd914426	ヨーグルト	https://www.amazon.co.jp/exec/obidos/ASIN/B08DXPMD4S?tag=protein-review-22			2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5f069708-46c0-4909-9ead-37ba40ed0acd	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ノンフレーバー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1b4a4fa5-777b-4227-a90d-c539d11d6321	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	アイスラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5a259bca-de86-48ae-bae5-f9f154e373dd	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ストロベリークリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
4315e0c5-11e9-4aaf-9882-65f01eafb253	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ソルティッドキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
8d3444ce-f5e5-4af5-b963-378485880545	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコバナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a906d44b-051e-4824-8ee0-53ccb7bd4a38	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコミント		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
bfd60546-99d4-45b2-ba85-d133db4ee698	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートオレンジ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
7ef0e951-7b2e-4f09-9455-cf858e7b7e9c	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートキャラメル		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c48073d3-fc75-4846-b419-64d290ab8ac7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートスムーズ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6cb15aec-c478-4e79-812a-f674a0d2d6da	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートナッツ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
12773464-3f2f-45f2-9195-ba8daf88d430	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートピーナッツバター		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
e700a09c-f280-49f8-9023-e89fc95d7bc9	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	チョコレートブラウニー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
87671664-7d61-4c49-b904-15b2c567e653	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ナチュラルストロベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
cb33cd41-9bb9-4796-bc44-8e377dba6fcc	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ナチュラルチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d131dc3e-2901-4614-ac35-c44f8f23e982	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ナチュラルバナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
61221925-66a6-4419-8697-712861d1a244	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ナチュラルバニラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
c77003d3-59be-44a7-8cb3-e55358a2d725	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	バナナ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
19a08e3b-cb79-4087-a51f-d724f74934b7	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	バニラ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
35dfcdcb-8080-436f-abdc-00be2a0a6224	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ブルーベリー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
d4852731-5d2e-4eb3-bdee-1ae2c1017107	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ホワイトチョコレート		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
5b00dc71-077d-4d12-b1fd-c80d2fb8af0b	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ミルクティー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
681a7f36-27ff-4ea1-8290-fe5711100a40	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	ロッキーロード		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
fd70789c-f9cd-4fe9-9ed6-f257a10121ad	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	9d35f70b-27d0-4ccd-8a82-08e9db7dabeb	抹茶ラテ		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fimpact-whey-isolate%2F10530911.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
94c1d745-b46f-46d0-a59e-f02408875f27	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	8b7c0305-9b9c-4246-9b35-0112506d5e3f	ストロベリーミルクシェイク		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthe-whey%2F11766315.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
a4726fd4-6cd1-42cf-b26a-e266da1bfc0b	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	8b7c0305-9b9c-4246-9b35-0112506d5e3f	チョコレートブラウニー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthe-whey%2F11766315.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
6dc7460d-746c-4894-a8e5-c96232a60e42	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	8b7c0305-9b9c-4246-9b35-0112506d5e3f	バニラアイスクリーム		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fthe-whey%2F11766315.html%3FapplyCode%3DVPO4-R1%26		2020-12-31 17:48:32.895121	2020-12-31 17:48:32.895121
1f553ba3-3fa8-44f6-85d9-8b2bb8155e6d	eff3d6fe-0daf-4642-aceb-fbdd7ede7f9c	52a0816b-1aeb-4609-9705-de48c774c7e5	レインボーキャンディー		https://px.a8.net/svt/ejp?a8mat=35NQEI+4EYS2I+45DI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.myprotein.jp%2Fsports-nutrition%2Fclear-whey-isolate%2F12081395.html%3FapplyCode%3DABKN-R3		2021-01-10 07:35:30.848984	2021-01-10 07:35:30.848984
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (review_id, product_master_id, product_variation_id, taste_rating, mix_rating, total_rating, description, created_at, thumbsup_count, user_id) FROM stdin;
a1bfaba8-4e28-4632-a979-6fdcd2d5686a	a97def5c-9e7f-4fc0-859d-3a8988556f13	51fa58a5-a7a2-45ea-b4c5-b199c5844b8f	5	5	4	-- get reviews\nLEFT JOIN \n(\n\tSELECT  product_master_id, json_agg(t) AS reviews\n\tFROM \n\t(\n\t\tSELECT *, row_number() over (partition by product_master_id) as rn FROM reviews\n\t\tORDER BY total_rating DESC, thumbsup_count DESC, created_at DESC \n\t) t\n\tWHERE rn < ${numberOfReviews} or rn = ${numberOfReviews}\n\tGROUP BY product_master_id\n) AS review USING (product_master_id) 	2021-01-08 22:56:45.196591+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
e5cc73cb-bcc9-4277-8b8f-16c361003fd6	8b2f81c0-4252-4730-8e7f-b26c63be725b	b8bb12cd-2eeb-4cb0-89b7-e0d7a6d9f55c	3	3	3	本当にメロンなのか？と気になって買ってみましたが、普通にメロン味で美味しかったです。もちろん少しミルクっぽさはあります。\n\nただエクスプロージョンに共通してかは分かりませんが、ちょっとダマが出来ます。	2021-01-10 06:43:34.469515+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
647feedc-3609-4d8f-9b87-1eff366a4729	a97def5c-9e7f-4fc0-859d-3a8988556f13	179e6e3a-449d-42d3-9a86-d7d97b1e85a2	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:01.489078+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
19ea5cd1-bea9-4499-881f-bfbfd7bbb553	a97def5c-9e7f-4fc0-859d-3a8988556f13	cf02825e-464b-4909-aaa9-ccd1d695ec22	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:09.458744+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
43d16dbd-107c-4ba4-a4d7-3137ab1c4274	a97def5c-9e7f-4fc0-859d-3a8988556f13	65821bdc-bec4-4e0f-ad66-4024d4af0b7e	3	3	5	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:17.73507+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
0f9a0bd2-217c-4961-a93a-94b94bb8aba6	a97def5c-9e7f-4fc0-859d-3a8988556f13	3c999625-4643-443b-9160-efd0f80d0cc0	3	3	5	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:28.00564+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
3c7ae23e-7f95-4160-bc34-d8ab961adc87	a97def5c-9e7f-4fc0-859d-3a8988556f13	2b097aae-9b96-4f02-ae18-e82fd69a3c2c	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:34.574132+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
c1a7b08c-2990-4007-b384-76cdd9b81163	a97def5c-9e7f-4fc0-859d-3a8988556f13	e7bc13ec-5670-4ce0-af82-25c2852cee57	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:41.227162+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
73f78f22-2fda-43cd-b338-fb4c5c6b764d	a97def5c-9e7f-4fc0-859d-3a8988556f13	a4c951a1-d5e5-4249-8e02-61f3c4d6796f	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:49.037077+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
cc724bc8-7e48-4f34-98ef-2cdbbfec204f	a97def5c-9e7f-4fc0-859d-3a8988556f13	fdd53e35-1b4d-4b13-b351-e8d3d15e6024	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:40:59.695612+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
8ef569b8-3188-404c-ae87-de3798cfed51	a97def5c-9e7f-4fc0-859d-3a8988556f13	5bf7329f-a675-42d6-8b80-7548344c6a8f	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:41:23.502545+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
afea5cf8-3ab1-4fca-9f7b-95da786fea72	a97def5c-9e7f-4fc0-859d-3a8988556f13	bbd2ddbe-bedf-4eff-b26f-a424ab7af20d	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:41:33.255928+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
465a6f90-1c9a-4771-b084-f4c04eaeb7a9	a97def5c-9e7f-4fc0-859d-3a8988556f13	db72eca4-bf31-4327-9324-f9126a06afb1	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:41:39.841404+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
9b9a0498-2974-485c-8e5e-d375abde3ce4	a97def5c-9e7f-4fc0-859d-3a8988556f13	51358e48-efd4-4b41-bcce-c360efe797c1	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:41:47.193832+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
e173abfb-0932-4900-8ed9-ab1895022cdb	a97def5c-9e7f-4fc0-859d-3a8988556f13	f5a301df-bf16-4444-b5cb-c22f26977df6	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:41:56.382601+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
7aad09e8-eea2-4481-98bb-86286f20226d	a97def5c-9e7f-4fc0-859d-3a8988556f13	b0acdb27-6e0f-48b7-a365-0c190a29fbf9	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:42:21.920784+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
4e28b377-82f9-4e74-8847-3030e9b52624	8b2f81c0-4252-4730-8e7f-b26c63be725b	be796376-d362-4995-962c-c1cdc0343f74	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:42:34.376093+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
c10101cb-a382-48cd-8f6d-25865a03e3a3	8b2f81c0-4252-4730-8e7f-b26c63be725b	1addfbe7-e102-4c62-a146-eac6f76a8893	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:42:41.904498+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
b5bbef6c-20f3-4093-b637-40b294af21f9	8b2f81c0-4252-4730-8e7f-b26c63be725b	93da6286-242b-40bc-ab9a-45a5c2b802c3	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:42:48.684918+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
292c308c-1ec7-4de2-b9a7-a49f073623aa	8b2f81c0-4252-4730-8e7f-b26c63be725b	6b516405-7b2c-4e6b-986f-c11f4f4b375e	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:42:55.662913+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
54e461e8-8446-4853-89e3-936ef4f5d683	8b2f81c0-4252-4730-8e7f-b26c63be725b	bec26fa9-ce75-4214-abdd-f1fbba9b9bd1	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:43:04.377945+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
76a06b61-8180-4db3-92a0-cbdbcb57a1f5	8b2f81c0-4252-4730-8e7f-b26c63be725b	4664f945-a3d0-4fcb-a063-488622fd080a	3	3	3	Routing. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.	2021-01-12 16:43:13.036022+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
0c35476a-c60d-4f3d-b54c-b29e2032ca8a	8b2f81c0-4252-4730-8e7f-b26c63be725b	d015ae43-9c6c-4746-acc9-c40b5d61a645	4	4	4	  const initialValues: ReviewFormValues = {\n    product_master_id: product_master_id,\n    product_variation_id: flavor.id,\n    user_id: '',\n    taste_rating: 3,\n    mix_rating: 3,\n    total_rating: 3,\n    description: '',\n  };	2021-01-27 02:07:06.042607+09	0	P5HFkhYYLUSOR6hC2kNX0xIFr5H3
\.


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (brand_id);


--
-- Name: product_masters product_masters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_masters
    ADD CONSTRAINT product_masters_pkey PRIMARY KEY (product_master_id);


--
-- Name: product_variations product_variations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_variations
    ADD CONSTRAINT product_variations_pkey PRIMARY KEY (product_variation_id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);


--
-- Name: reviews reviews_unique_user_id_per_variation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_unique_user_id_per_variation UNIQUE (product_variation_id, user_id);


--
-- Name: product_masters product_masters_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_masters
    ADD CONSTRAINT product_masters_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(brand_id);


--
-- Name: product_variations product_variations_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_variations
    ADD CONSTRAINT product_variations_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(brand_id);


--
-- Name: product_variations product_variations_product_master_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_variations
    ADD CONSTRAINT product_variations_product_master_id_fkey FOREIGN KEY (product_master_id) REFERENCES public.product_masters(product_master_id);


--
-- Name: reviews reviews_product_master_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_product_master_id_fkey FOREIGN KEY (product_master_id) REFERENCES public.product_masters(product_master_id);


--
-- Name: reviews reviews_product_variation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_product_variation_id_fkey FOREIGN KEY (product_variation_id) REFERENCES public.product_variations(product_variation_id);


--
-- PostgreSQL database dump complete
--

