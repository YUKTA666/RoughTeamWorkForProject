import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import tests from './Tests.js';
import './home.css';
import entc from './entc.jpeg';
import cse from './cse.jpeg';
import mech from './mech.jpeg';

function App() {
  return (
    <div className="App">
      <MyHeader/>
	<main>
		<section>
			<h2>Welcome to Engineering Stream Assistant</h2>
			<p>Our platform helps students and engineers determine which engineering stream is best suited for them based on their skills and interests.</p>
			<a href={tests} class="button">Get Started</a>
		</section>
		<section>
			<h2>Streams</h2>
			<ul>
				<li><div class="flip-card">
					<div class="flip-card-inner">
					  <div class="flip-card-front">
						<img src={cse} alt="entc" width={230} height={270}/>
					  </div>
					  <div class="flip-card-back">
						<h1>Computer Science</h1>
						<it>Computer science is the study of computers and computational systems which includes everything from the algorithms that make up software to how software interacts with hardware to how well software is developed and designed.</it>
					  </div>
					</div>
				  </div></li>
				<li><div class="flip-card">
					<div class="flip-card-inner">
					  <div class="flip-card-front">
						<img src={entc} alt="entc" width={230} height={270}/>
					  </div>
					  <div class="flip-card-back">
						<h1>Electronics & Telecommunication</h1>
						<p>Electronics and telecommunications engineering is a modern engineering discipline that deals with designing, fabricating, producing, testing and supervising the manufacturing process of complex electronic products and systems.</p>
					  </div>
					</div>
				  </div></li>
				<li><div class="flip-card">
					<div class="flip-card-inner">
					  <div class="flip-card-front">
						<img src={mech} alt="entc" width={230} height={270}/>
					  </div>
					  <div class="flip-card-back">
						<h1>Mechanical</h1>
						<p>Mechanical engineering is the study of physical machines that may involve force and movement. It is an engineering branch that combines engineering physics and mathematics principles with materials science, to design, analyze, manufacture, and maintain mechanical systems.</p>
					  </div>
					</div>
				  </div></li>
			</ul>
		</section>
		<section>
			<blockquote>
				<p>"Empower yourself with Engineering Stream Assistant to create lifelong career success in the field of engineering"</p>
			</blockquote>
		</section>
	</main>
	<MyFooter/>
    </div>
  );
}

export default App;
