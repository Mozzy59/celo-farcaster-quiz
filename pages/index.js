export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0E0E0E',
      color: '#35D07F',
      fontFamily: 'monospace',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem' }}>⚡ Welcome to Celo Quest ⚡</h1>
      <p style={{ fontSize: '1.2rem', color: '#CCC' }}>
        Learn Web3 & Celo security through an interactive 50-question quiz.
      </p>
    </div>
  );
}
