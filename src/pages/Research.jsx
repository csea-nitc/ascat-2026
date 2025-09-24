export default function Research() {
  const committee = {
    chiefPatron: [
      {
        name: "Prof. Prasad Krishna",
        position: "Director",
        affiliation: "National Institute of Technology, Calicut, India",
      },
    ],
    generalCoChairs: [
      { name: "Madhukumar S D", affiliation: "NIT Calicut, India" },
      { name: "Biplab K Sikdar", affiliation: "IIEST Shibpur, India" },
      { name: "Pedro Paulo Balbi de Oliveira", affiliation: "Universidade Presbiteriana Mackenzie, Brazil" },
    ],
    programmeCoChairs: [
      { name: "Raju Hazari", affiliation: "National Institute of Technology Calicut, India" },
      { name: "Sukanta Das", affiliation: "Indian Institute of Engineering Science and Technology, Shibpur, India" },
      { name: "Jimmy Jose", affiliation: "National Institute of Technology Calicut, India" },
    ],
    programCommittee: [
      { name: "Biplab K Sikdar", affiliation: "IIEST Shibpur, India" },
      { name: "Sukanta Das", affiliation: "IIEST Shibpur, India" },
      { name: "Pabitra Pal Chaudhuri", affiliation: "ISI Kolkata, India" },
      { name: "Jarkko Kari", affiliation: "University of Turku, Finland" },
      { name: "Enrico Formenti", affiliation: "Université Côte d'Azur" },
      { name: "Stefano Nichele", affiliation: "Norwegian University of Science and Technology" },
      { name: "Teijiro Isokawa", affiliation: "University of Hyogo" },
      { name: "Hiroshi Umeo", affiliation: "University of Osaka Electro-Communication, Japan" },
      { name: "Rezki Chemlal", affiliation: "University of Bejaia, Algeria" },
      { name: "Pedro Paulo Balbi", affiliation: "Universidade Presbiteriana Mackenzie, Brazil" },
      { name: "Sudhakar Sahoo", affiliation: "Institute of Mathematics and Applications, Bhubaneswar, India" },
      { name: "Nazma Naskar", affiliation: "Kalinga Institute of Industrial Technology University, India" },
      { name: "Jimmy Jose", affiliation: "NIT Calicut, India" },
      { name: "Raju Hazari", affiliation: "NIT Calicut, India" },
      { name: "Kamalika Bhattacharjee", affiliation: "NIT Tiruchirappalli, India" },
      { name: "Souvik Roy", affiliation: "IIT Kanpur, India" },
      { name: "Supreeti Kamilya", affiliation: "BIT Mesra, Ranchi, India" },
      { name: "Sukanya Mukharjee", affiliation: "Institute of Engineering and Management, Kolkata, India" },
      { name: "Sumit Adak", affiliation: "IIEST Shibpur, India" },
      { name: "Bibhash Sen", affiliation: "NIT Durgapur, India" },
      { name: "Mamata Dalui", affiliation: "NIT Durgapur, India" },
      { name: "Ummity Srinivasa Rao", affiliation: "Vellore Institute of Technology, Chennai, India" },
      { name: "Rinkaj Goyal", affiliation: "GGS Indraprastha University, New Delhi, India" },
      { name: "Sumita Basu", affiliation: "Bethune College, Kolkata, India" },
      { name: "Guillaume Theyssier", affiliation: "CNRS & Université Aix-Marseille, France" },
      { name: "Bernard De Baets", affiliation: "Ghent University, Belgium" },
      { name: "Nazim Fatès", affiliation: "Inria-Loria, France" },
      { name: "Franco Bagnoli", affiliation: "University of Florence, Italy" },
      { name: "Stefania Bandini", affiliation: "University of Milano-Bicocca, Italy" },
      { name: "R Ramanujam", affiliation: "Azim Premji University (Visiting), India" },
      { name: "Mihir K Chakraborty", affiliation: "Jadavpur University, Kolkata, India" },
      { name: "K. Ramachandra Rao", affiliation: "IIT Delhi, India" },
      { name: "Alonso Castillo Ramirez", affiliation: "Universidad de Guadalajara, Mexico" },
      { name: "Hector Zenil", affiliation: "Kings College, London" },
      { name: "Katsunobu Imai", affiliation: "Fukuyama University, Japan" },
      { name: "Andreas Deutsch", affiliation: "TU Dresden, Germany" },
      { name: "Luca Mariot", affiliation: "Radboud University, Netherlands" },
      { name: "Sylvain Sené", affiliation: "Aix-Marseille University, France" },
      { name: "Prince Gideon Kubendran Amos", affiliation: "NIT Tiruchirappalli, India" },
      { name: "Hasan Akin", affiliation: "Harran University, Turkey" },
      { name: "Jan M. Baetens", affiliation: "Ghent University, Belgium" },
      { name: "Giuliamaria Menara", affiliation: "University of Trieste, Italy" },
    ],
  };

  return (
    <section className="min-h-[100vh] flex flex-col bg-transparent relative z-10 px-5 md:px-72 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-4 mt-8 md:mt-0">Committee</h1>

      
      <div className="w-full max-w-6xl mb-16 overflow-x-auto rounded-2xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full sm:flex sm:gap-4 sm:flex-nowrap">
          
          {/* Chief Patron */}
          <div className="min-w-[250px] p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3">Chief Patron</h2>
            {committee.chiefPatron.map((person, idx) => (
              <p key={idx} className="text-sm">
                <span className="font-bold">{person.name}</span> <br />
                <span className="font-semibold">{person.position}</span><br/>
                {person.affiliation}
              </p>
            ))}
          </div>

          {/* General Co-chairs */}
          <div className="min-w-[250px] p-6 ">
            <h2 className="text-xl font-semibold mb-3">General Co-chairs</h2>
            <ul className="space-y-1 text-sm">
              {committee.generalCoChairs.map((person, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{person.name}</span> <br />
                  {person.affiliation}
                </li>
              ))}
            </ul>
          </div>

          {/* Programme Co-chairs */}
          <div className="min-w-[250px] p-6">
            <h2 className="text-xl font-semibold mb-3">Programme Co-chairs</h2>
            <ul className="space-y-2 text-sm">
              {committee.programmeCoChairs.map((person, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{person.name}</span> <br />
                  {person.affiliation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Program Committee */}
      <div className="w-full max-w-6xl p-8 mb-16 overflow-x-auto rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Program Committee (Tentative)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {Array.from({ length: 3 }, (_, colIdx) => (
            <ul key={colIdx} className="space-y-2">
              {committee.programCommittee
                .filter((_, i) => i % 3 === colIdx)
                .map((person, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{person.name}</span> <br />
                    {person.affiliation}
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
