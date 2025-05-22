import Head from 'next/head';
import Link from 'next/link';
export default function Step2Exchange() {
  return (
    <>
      <Head>
        <title>步骤 2：获取 Tron USDT 地址</title>
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
        <section style={sectionStyle}>
          <h2 style={titleStyle}>步骤 2：获取 Tron USDT 地址</h2>
          <p style={descStyle}>
            我们将使用 <strong>Bitget Web3 钱包</strong> 获取属于你自己的 USDT（Tron链）地址，用于后续收款或从交易所提币。
          </p>

          <a
            href="https://web3.bitget.cloud/zh-CN"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            前往 Bitget 钱包官网
          </a>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>🔗 什么是区块链？</h3>
          <p style={descStyle}>
            如果你把钱包当作银行账户，那么“链”就相当于这个账户是在哪家银行开的。
            比如：
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Tron链</strong> → 类似“建设银行”</li>
              <li><strong>Ethereum链</strong> → 类似“工商银行”</li>
              <li><strong>Polygon链</strong> → 类似“农业银行”</li>
            </ul>
            不同的链，地址格式不同，手续费不同，因此<strong>提币时要选对链</strong>！
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>🔐 助记词是什么？</h3>
          <p style={descStyle}>
            钱包创建时会给你一串英文单词，这就是<strong>助记词</strong>。它就像你银行账户的<strong>开户密码 + 金库钥匙</strong>合二为一。
            <br />
            任何人只要拿到你的助记词，就能完全掌控你的钱包。<br />
            <strong style={{ color: '#ff5555' }}>切记不要截图，不要保存在网盘，不要发给任何人！</strong>
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>🎥 演示：如何获取 Tron USDT 地址</h3>
          <p style={descStyle}>
            以下是一个简单演示视频，展示如何通过 Bitget 钱包创建钱包并获取 Tron 链上的 USDT 地址：
          </p>

          <video
            controls
            style={{
              width: '100%',
              borderRadius: '12px',
              border: '2px solid #8b5cf6',
              marginBottom: '16px',
            }}
            src="/tron.mp4"
          />
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>📌 提前准备：为提币做好准备</h3>
          <p style={descStyle}>
            下一步我们将在交易所（如 OKX）购买 USDT，然后<strong>提币</strong>到你刚刚生成的钱包地址中。
            请务必牢记你选择的是哪条链（建议选择 <strong>Tron TRC20</strong>，手续费低）。
          </p>
        </section>

        <Link href="/step2-wallet">
          <div style={buttonStyle}>单独进入 交易所下载 页面</div>
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
