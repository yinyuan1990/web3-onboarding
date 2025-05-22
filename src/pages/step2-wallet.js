import Head from 'next/head';
import Link from 'next/link';
export default function Step3Withdraw() {
  return (
    <>
      <Head>
        <title>步骤 3：下载交易所并购买 USDT</title>
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
        {/* 交易所下载 */}
        <section style={sectionStyle}>
          <h2 style={titleStyle}>步骤 3：注册并下载交易所 App</h2>
          <p style={descStyle}>
            推荐使用 OKX（欧易）交易所，它支持中国用户使用 C2C 购买 USDT。
            首先你需要下载安装 OKX App：
          </p>

          <a
            href="https://www.okx.com/zh-hans/download"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            📥 点击下载 OKX App
          </a>

          <p style={descStyle}>
            下载完成后请先<strong>注册账号并完成实名认证</strong>（用手机号即可）。认证通过后才能进行 C2C 法币交易。
          </p>
        </section>

        {/* 介绍 C2C 交易 */}
        <section style={sectionStyle}>
          <h3 style={titleStyle}>🪙 什么是 C2C（法币）交易？</h3>
          <p style={descStyle}>
            就像淘宝买东西一样，C2C 交易是你和其他用户之间互相买卖 USDT，
            支持微信、支付宝、银行卡等方式转账。<br />
            你只需选择一个卖家，下单并转账后平台会自动完成 USDT 的划转，非常方便。
          </p>
        </section>

        {/* 演示视频 */}
        <section style={sectionStyle}>
          <h3 style={titleStyle}>🎥 教程：如何在 OKX 上购买 USDT</h3>
          <p style={descStyle}>
            以下是一个 C2C 购买 USDT 的演示视频，供你参考：
          </p>

          <video
            controls
            style={{
              width: '100%',
              borderRadius: '12px',
              border: '2px solid #8b5cf6',
              marginBottom: '16px',
            }}
            src="/videoplayback.mp4" // 请将该视频文件放入 public 文件夹
          />
        </section>

        {/* 下一步准备 */}
        <section style={sectionStyle}>
          <h3 style={titleStyle}>📤 下一步：将 USDT 提币到钱包</h3>
          <p style={descStyle}>
            你在交易所购买的 USDT 默认在 OKX 账户中。下一步我们将教你如何提币到钱包地址（例如你在 Bitget 钱包中获取的 Tron 链地址）。
            <br />
            ✅ 请务必选择链类型为 <strong>TRC20（Tron）</strong>，手续费最低，到账快。
          </p>
        </section>

        <Link href="/step3-wallet">
          <div style={buttonStyle}>钱包 交易所互相提币</div>
        </Link>
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
  fontSize: '24px',
  marginBottom: '12px',
};

const descStyle = {
  color: '#ccc',
  fontSize: '16px',
  lineHeight: '1.7',
  marginBottom: '16px',
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#8b5cf6',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '10px',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginTop: '12px',
  textAlign: 'center',
};
