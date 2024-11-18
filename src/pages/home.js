import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        background: "#272727",
        color: "white",
        minHeight: "100vh", // Garantindo que a div ocupe pelo menos 100% da altura da tela
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Isso garante que o footer será empurrado para baixo, se necessário
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Título da página */}
      <h1 style={{ fontSize: "4rem", fontFamily: "'Orbitron', sans-serif", marginBottom: "20px" }}>
        Bem-vindo ao Pizza Planet!
      </h1>

      {/* Subtítulo */}
      <p style={{ fontSize: "1.5rem", fontFamily: "'Orbitron', sans-serif", marginBottom: "40px" }}>
        Onde cada pizza é uma viagem pelo universo de sabores!
      </p>

      {/* Imagem temática */}
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74c5bbe5-3f63-4716-a290-efa5c0c1a370/df7ixgt-99bcab86-840a-4660-b7c0-3ab839cc2d23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0YzViYmU1LTNmNjMtNDcxNi1hMjkwLWVmYTVjMGMxYTM3MFwvZGY3aXhndC05OWJjYWI4Ni04NDBhLTQ2NjAtYjdjMC0zYWI4MzljYzJkMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pSBDvEaimBRupoU3WxsQeKnBoKVRQiZc1kuyT-RAhas"
        alt="Planet Pizza Logo"
        style={{ width: "300px", marginBottom: "40px" }}
      />

      {/* Botão de ação */}
      <Link to="/menu">
        <button
            style={{
            backgroundColor: "#ff4500",
            color: "white",
            padding: "15px 30px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0px 4px 10px rgba(255, 69, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
            }}
        >
            Explore Nosso Cardápio
        </button>
        </Link>

    </div>
  );
}

export default Home;
