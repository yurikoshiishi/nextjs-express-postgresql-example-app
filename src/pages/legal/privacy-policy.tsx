import {Typography} from '@material-ui/core';
import React from 'react';
import Article from '../../components/layouts/Article';
import SidebarLayout from '../../components/layouts/SiderbarLayout';

interface PrivacyPolicyProps {
  [key: string]: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = (props) => {
  const title = 'プライバシーポリシー';
  const description = `${title}はこちら`;

  return (
    <SidebarLayout title={title} description={description}>
      <Article title={title}>
        <section>
          <Typography variant="h2">
            当サイトに掲載されている広告について
          </Typography>
          <p>
            当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net、Amazonアソシエイト、もしもアフィリエイト）を利用しています。
          </p>
          <p>
            このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
            『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
            を使用することがあります。
          </p>
          <p>
            またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            をクリックしてください。
          </p>
        </section>
        <section>
          <Typography variant="h2">
            当サイトが使用しているアクセス解析ツールについて
          </Typography>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          </p>
          <p>
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            この規約に関して、詳しくは
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            をクリックしてください。
          </p>
        </section>
        <section>
          <Typography variant="h2">ユーザーデータ削除について</Typography>
          <p>
            当サイトでは、レビュー投稿などのサービス利用のために、Google、Facebook、Twitterといった外部サービスによるログインを提供しています。
          </p>
          <p>
            上記ログインより得られたデータ、および投稿したレビューの削除を希望する場合は、運営事務局にご連絡ください。
          </p>
          <p>メールアドレス：review.protein.info@gmail.com</p>
        </section>
      </Article>
    </SidebarLayout>
  );
};

export default PrivacyPolicy;
