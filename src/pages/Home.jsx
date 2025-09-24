export default function Home() {
  return (
    <section className="min-h-[100vh] flex flex-col  bg-transparent relative z-10 px-5 md:px-72 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-4 mt-8 md:mt-0">
        Fifth Asian Symposium on Cellular Automata Technology
      </h1>
      <div className="text-justify md:w-[55vw] mb-10">
        <p className=""></p>
        <p className="">
          This is the fifth edition of the Asian Symposium on Cellular Automata Technology (ASCAT) to be held during February 25-27, 2026. 
          The first edition of ASCAT (ASCAT 2022) was held during March 03-05, 2022 in online mode. 
          This time the event is organised in hybrid mode. 
          The symposium is officially organized by Department of Computer Science & Engineering, National Institute of Technology, 
          Calicut (NIT, Calicut) in its campus at Kerala, India. 
          The symposium is unique by its type -- it does not look cellular automata as only mathematical tool, but also as technology.
        </p>
        <br/>

        <p className="">
          The symposium aims two-fold: to nurture the theories of cellular automata, and to explore the cellular automata as technology. 
          So all the theoretical aspects of cellular automata and their applications in any domain are within the scope of this symposium.
        </p>
        <br/>

        <h1 className="text-4xl font-bold mb-4">Important Dates</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <tbody>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Paper Submission deadline</td>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Friday, October 24, 2025</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Notification of acceptance</td>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Tuesday, December 23, 2025</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Deadline for camera-ready papers</td>
                <td className="border-2 border-gray-400 px-4 py-2 text-center">Monday, January 05, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>

        <h1 className="text-4xl font-bold mb-4">Topics</h1>
        <p className="mb-4">
          The conference will cover a broad range of topics in computer science
          and technology, including but not limited to:
        </p>

        <div className="space-y-2">
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Algebraic and Theoretical aspects of CA</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Algorithmic and Complexity issues in Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Formal Language Processing</li>
                <li tabIndex={4} className="px-4 py-1">Cellular Automata and Logic</li>
                <li tabIndex={4} className="px-4 py-1">Randomness</li>
                <li tabIndex={4} className="px-4 py-1">Reversibility and Cycle structure</li>
                <li tabIndex={4} className="px-4 py-1">Algebraic properties of Cellular Automata and Discrete Systems</li>
                <li tabIndex={4} className="px-4 py-1">Characterization tools for Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Conservation Laws and Cellular Automata</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Cellular Automata Models and Computation</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Traffic models and Crowd dynamics</li>
                <li tabIndex={4} className="px-4 py-1">Models for Distributed and Parallel Systems</li>
                <li tabIndex={4} className="px-4 py-1">Lattice Gas and Lattice Boltzmann model</li>
                <li tabIndex={4} className="px-4 py-1">Environmental, Social and Economical Modeling and Simulation</li>
                <li tabIndex={4} className="px-4 py-1">Natural Computing</li>
                <li tabIndex={4} className="px-4 py-1">Reversible and Quantum Computing</li>
                <li tabIndex={4} className="px-4 py-1">Cellular Automata Architecture for Computation</li>
                <li tabIndex={4} className="px-4 py-1">Cellular Automata for Computing-in-Memory Architecture</li>
                <li tabIndex={4} className="px-4 py-1">Cellular Automata with Memory</li>
                <li tabIndex={4} className="px-4 py-1">Integration of CA and Agent-based modeling</li>
                <li tabIndex={4} className="px-4 py-1">Sandpile Cellular Automata</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Non-uniformity in Cellular Automata</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Non-uniform or Hybrid Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Asynchronous Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Stochastic Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Network Automata</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Cellular Automata, Hardware Design and Security</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Circuit Design and Computer Architecture</li>
                <li tabIndex={4} className="px-4 py-1">Quantum-dot Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Memristor Design</li>
                <li tabIndex={4} className="px-4 py-1">Security and Encryption</li>
                <li tabIndex={4} className="px-4 py-1">Cryptography</li>
                <li tabIndex={4} className="px-4 py-1">Secured Hardware Design</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Quantum-dot Cellular Automata</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Logic Gates and Circuit Design</li>
                <li tabIndex={4} className="px-4 py-1">Quiescent Quantum Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Quantum Gate Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Universal Quantum Cellular Automata</li>
                <li tabIndex={4} className="px-4 py-1">Quantum computing</li>
                <li tabIndex={4} className="px-4 py-1">Quantum lattice gases</li>
                <li tabIndex={4} className="px-4 py-1">Quantum Reversible Automata</li>
                <li tabIndex={4} className="px-4 py-1">Quantum Nano-Automata</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Cellular Automata, Machine Learning and Artificial Intelligence</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Artificial Life</li>
                <li tabIndex={4} className="px-4 py-1">Pattern Recognition</li>
                <li tabIndex={4} className="px-4 py-1">Machine Learning</li>
                <li tabIndex={4} className="px-4 py-1">Bioinformatics</li>
                <li tabIndex={4} className="px-4 py-1">Image and Video Processing</li>
              </ul>
            </div>
          </details>
          <details className="border border-gray-300 rounded-md">
            <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100">Emerging Applications of Cellular Automata</summary>
            <div className="px-8">  
              <ul tabIndex={4} className="list-disc pl-8 py-2">
                <li tabIndex={4} className="px-4 py-1">Ecological issues</li>
                <li tabIndex={4} className="px-4 py-1">Urban development</li>
                <li tabIndex={4} className="px-4 py-1">Graph Colouring</li>
                <li tabIndex={4} className="px-4 py-1">Sensor network applications</li>
              </ul>
            </div>
          </details>
        </div>
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Publication</h1>
        <p className="mb-4">
          To be announced soon.
        </p>
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Sponsored by</h1>
        <p className="mb-4">
          To be announced soon.
        </p>
      </div>
    </section>
  );
}
