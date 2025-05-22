import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyInviteCode = () => {
    navigator.clipboard.writeText('85486119').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后恢复
    });
  };

  return (
    <>
      <Head>
        <title>Web3 入门引导</title>
      </Head>

      <main
        style={{
          minHeight: '100vh',
          padding: '40px 20px',
          background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
          color: 'white',
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '40px', marginBottom: '40px', textAlign: 'center' }}>
          Web3 新手入门引导
        </h1>

        {/* VPN 推荐 + QQ 群 */}
        <section style={sectionStyle}>
          <h2 style={titleStyle}>步骤 0：下载 VPN 工具</h2>
          <p style={descStyle}>
            为确保能访问 MetaMask、Binance 等网站，建议先配置科学上网工具。
            快连 VPN 我已经用了 6 年了，稳定、不跑路，
            Web3 必备神器，免费 2 小时的使用足够你下载钱包和交易所了。
          </p>

          <h2 style={titleStyle}>🚀 解锁自由上网，从这里开始！</h2>
          <p style={descStyle}>
            想访问 Google、YouTube、MetaMask 官网？只需一个轻便好用的工具，你将发现一个全新的世界！
          </p>

          <p style={descStyle}>✅ <strong>推荐浏览器：</strong>Chrome</p>

          <a
            href="https://bitbucket.org/letsgo666/letsgogo_4/src/main/"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            📥 Bitbucket 下载链接（推荐）
          </a>

          <a
            href="https://github.com/LetsgoNetwork/LetsGo_2/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            🔗 GitHub 备用链接
          </a>

          <p style={{ ...descStyle, marginTop: '16px' }}>
            安装完成后，打开软件并填写邀请码：
            <span
              onClick={() => alert('邀请码已复制：85486119')}
              style={{
                cursor: 'pointer',
                color: '#ffdd57',
                fontWeight: 'bold',
                fontSize: '18px',
                marginLeft: '6px',
                textDecoration: 'underline',
              }}
              title="点击复制邀请码"
            >
              85486119
            </span>
            ，即可
            <strong style={{ color: '#00ffaa', fontSize: '20px', marginLeft: '6px' }}>
              额外获得 <u>3 天免费会员</u>！
            </strong>
          </p>

          <hr style={{ margin: '30px 0', borderColor: '#555' }} />

          <h3 style={{ ...titleStyle, fontSize: '22px' }}>💬 官方交流群</h3>
          <p style={descStyle}>
            QQ 群号：
            <a
              href="tencent://groupwpa/?subcmd=all&param=464249094"
              style={{ color: '#8b5cf6', textDecoration: 'underline' }}
            >
              <strong>464249094</strong>
            </a>
            （点击添加 → 推荐进群）
          </p>

          <img
            src="/web.JPG"
            alt="QQ群二维码"
            style={{
              width: '480px',
              height: '840px',
              borderRadius: '12px',
              border: '2px solid #8b5cf6',
              marginTop: '16px',
            }}
          />
        </section>

        {/* 跳转按钮区块 */}
        <section style={{ ...sectionStyle, textAlign: 'center' }}>
          <h2 style={{ ...titleStyle, textAlign: 'center' }}>开始你的 Web3 之旅</h2>

          <Link href="/step1-wallet">
            <div style={buttonStyle}>步骤 1：下载并安装钱包</div>
          </Link>

          <Link href="/step2-exchange">
            <div style={buttonStyle}>步骤 2：注册交易所账号</div>
          </Link>

          <Link href="/step3-withdraw">
            <div style={buttonStyle}>步骤 3：提币到钱包</div>
          </Link>
        </section>
      </main>
    </>
  );
}

// 样式
const sectionStyle = {
  maxWidth: '800px',
  width: '100%',
  marginBottom: '60px',
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '24px',
  borderRadius: '16px',
  boxShadow: '0 0 12px rgba(0, 0, 0, 0.3)',
};

const titleStyle = {
  fontSize: '28px',
  marginBottom: '10px',
};

const descStyle = {
  color: '#ccc',
  marginBottom: '16px',
  fontSize: '16px',
  lineHeight: '1.6',
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#8b5cf6',
  color: 'white',
  padding: '14px 28px',
  borderRadius: '10px',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '10px 8px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  textAlign: 'center',
};
