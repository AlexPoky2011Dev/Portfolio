const TechStack = () => {
    return (
        <div>
            <div className="flex justify-center gap-4">
                <div className="hover:bg-white/25 project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg text-center" data-aos="fade-up">
                    <h2 className="text-lg font-bold text-white">FrontEnd</h2>
                    <h4>HTML5</h4>
                    <h4>CSS3 + TailwindCSS</h4>
                    <h4>JavaScript (ES6) + Typescript</h4>
                    <h4>NextJS (TypeScript)</h4>
                </div>

                <div className="hover:bg-white/25 project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg text-center" data-aos="fade-up">
                    <h2 className="text-lg font-bold text-white">BackEnd</h2>
                    <h4>ExpressJS (JS/TS)</h4>
                    <h4>NodeJS</h4>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-3">
                <div className="hover:bg-white/25 project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg text-center" data-aos="fade-up">
                    <h2 className="text-lg font-bold text-white">Databáze</h2>
                    <h4>MongoDB</h4>
                </div>

                <div className="hover:bg-white/25 project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg text-center" data-aos="fade-up">
                    <h2 className="text-lg font-bold text-white">Ostatní</h2>
                    <h4>Java</h4>
                </div>
            </div>
        </div>
    );
};

export default TechStack;