import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

function Home() {
	const card1 = {
		imgUrl: "https://64.media.tumblr.com/9ff6496f6450d29bd78f195a79f4611c/tumblr_nrl4vuHtWq1rwuob4o1_500.gif",
		title: "Ballet/Danza clásica",
		description: "Para admiradores de Billy Elliot o Ballerina, y aquellos que deseen tonificar su cuerpo, ganar flexibilidad, mejorar coordinación, conciencia espacial y coorporal, y memoria coreográfica",
	}

	const card2= {
		imgUrl: "https://64.media.tumblr.com/0b88a488cf73fcd50936539b905478f3/376b136c0b8d6e2a-3b/s500x750/aa063cd9ccdc5f50e50ff5296105382bc7ad1498.gif",
		title: "Broadway Jazz",
		description: "Baila como las estrellas de tus musicales favoritos como Grease, West Side Story, Wicked",
	}
	
	const card3 = {
		imgUrl: "https://i.makeagif.com/media/9-20-2015/Ck17JJ.gif",
		title: "Claqué/Tap",
		description: "Si te engatusó Lalaland o has visto bailar a Gene Kelly en Bailando bajo la lluvia, Mary Poppins, Billy Elliot...disfrutarás de estas clases al más puro estilo Hollywood años 50"
	}
	
	const card4 = {
		imgUrl: "https://i.makeagif.com/media/6-21-2019/eJedYN.gif",
		title: "Flamenco",
		description: "¿Te arrancas a dar palmas con las rumbas? quizás esta es tu técnica, baila como los grandes bailaores de los tablaos flamencos",
	}

	return (
		<div>
			<Navbar />
			<div className="container px-5">
				<Jumbotron />

				<div className="container mt-5">
					<div className="row">
						<Card cardInfo = {card1} />
						<Card cardInfo = {card2} />
						<Card cardInfo = {card3} />
						<Card cardInfo = {card4} />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;