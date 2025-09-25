export default function Submission() {
  return (
    <section className="min-h-[100vh] flex flex-col  bg-transparent relative z-10 px-5 md:px-72 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-4 mt-8 md:mt-0">
        Submission
      </h1>
      <div className="text-justify md:w-[55vw] mb-10">
        <p>
            Authors are invited to submit original unpublished research papers written in English 
            that are not more than 12 pages (single column including figures, tables and references) 
            via EquinOCS Springer Nature Submission System.
        </p>
        <p className="font-bold mt-4 text-left">
            Submit your paper: <a
                                    href="https://equinocs.springernature.com/service/ascat2026"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    ASCAT 2026 through EquinOCS
                                </a>
        </p>
        <br />
        <p>
            Submissions should be double-blind and it should contain original research that has not previously 
            been published. Concurrent submissions to other conferences/ journals are not allowed. Supplementary 
            material that exceeds the above mentioned page limit may be included as an appendix and will be considered 
            at the committee's discretion (note that appendices will not be published in the proceedings).
        </p>
        <br />
        <p>
            Submissions must be formatted in LaTeX or Microsoft Word using the &nbsp;
            <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            className="text-blue-600 underline hover:text-blue-800">
            standard Springer single column format</a>
            &nbsp; and submitted in Portable Document Format (PDF). For each accepted paper, at least one author 
            has to complete full registration and present the paper. Papers authored or co-authored by PC members 
            are also welcome and will follow a specific evaluation process.
        </p>
      </div>
    </section>
  );
}
