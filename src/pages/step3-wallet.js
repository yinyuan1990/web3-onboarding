import Head from 'next/head';

export default function Step4Play() {
  return (
    <>
      <Head>
        <title>步骤 4：Web3 玩法全景速览</title>
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
          <h2 style={titleStyle}>💡 最后一课：怎么玩 Web3 才能赚钱？</h2>
          <p style={descStyle}>
            有了钱包、有了币，你就拥有了自己的“数字银行账户”。接下来，我们来看看你能怎么玩：
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>💸 模式一：倒卖 USDT 差价套利</h3>
          <p style={descStyle}>
            举个例子：你在 OKX 上用 7.1 元买入 100 USDT，然后在 Telegram、微信群或线下以 7.3 元卖出给别人，赚取差价。
            <br />
            🧠 这是最稳定、最安全的玩法，适合保守型玩家，几百块几千块也能操作。
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>🏦 模式二：稳定币赚利息</h3>
          <p style={descStyle}>
            你可以把 USDT 存到链上“活期产品”或“理财协议”，像 AAVE、Curve、Bitget Earn 等，年化收益 5%–15%。<br />
            ✅ 相比银行那点 <strong style={{ color: '#ffcc00' }}>年利率不到 2%</strong>，这收益香太多了！
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>🐶 模式三：Meme 币 / 土狗币 短线玩法</h3>
          <p style={descStyle}>
            也就是你常听到的“狗币”、“猫币”，这些币没什么技术背景，但靠热点、社区情绪短期暴涨暴跌。<br />
            适合会看 K 线图、有点赌性和网感的朋友。
            <br />⚠️ 高收益 + 高风险，一夜翻倍也可能一夜归零。
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>📈 模式四：合约 / 杠杆交易（高级玩法）</h3>
          <p style={descStyle}>
            类似做空、做多 BTC/ETH，用小钱博大钱，但需要足够交易经验，不然容易爆仓亏光。<br />
            ❗ 不建议新手一开始接触，可以当成未来进阶方向。
          </p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>✅ 小结：Web3 = 高自由 + 高机会</h3>
          <p style={descStyle}>
            你可以像跑地摊一样低买高卖（倒 USDT），像银行一样存币赚息，也可以像炒股那样投机热门代币。
            <br />
            不需要公司背书、不看脸色、不看学历，<strong style={{ color: '#00ffaa' }}>人人都能参与，全凭你点子 + 执行力</strong>。
          </p>
        </section>
      </main>
    </>
  );
}

// 样式
const sectionStyle = {
  maxWidth: '800px',
  width: '100%',
  marginBottom: '50px',
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
  lineHeight: '1.8',
};
