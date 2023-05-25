import PropTypes from "prop-types";
import AsideLeague from "./asideLeague";
import AsideTopPlayer from "./asideTopPlayer";

export default function Table({ statistics }) {
    Table.propTypes = {
        statistics: PropTypes.array.isRequired
    };

    const vectorActive = (
        <svg width="12px" height="12px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="green" transform="translate(32.000000, 42.666667)">
                <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                </path>
            </g>
        </svg >
    );

    const vector = (
        <svg width="12px" height="12px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="gray" transform="translate(32.000000, 42.666667)">
                <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                </path>
            </g>
        </svg >
    );

    const vectorRight = (
        <svg className="rotate-90" width="15px" height="15px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="gray" transform="translate(32.000000, 42.666667)">
                <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                </path>
            </g>
        </svg >
    );

    return (
        <div className="inline-flex relative left-2">
            <div className="w-[780px] bg-white flex-col">
                <div className="w-full h-[56px] bg-[#898989] flex justify-around items-center uppercase tracking-wide font-sans font-medium">
                    {"stiri recente, campionate, echipe, jucatori, antrenori".split(",").map((el, index) => (
                        <a className="hover:text-white" key={index.toString()} href="#">{el}</a>
                    ))}
                </div>

                <div className="w-full h-[68px] bg-[#2a2f32] flex justify-around items-center uppercase tracking-widest font-sans font-bold">
                    <a className="text-white" href="#">overall</a>
                </div>

                <div className="w-full h-[80px] bg-white flex justify-around items-center uppercase tracking-widest font-mono font-bold text-[#aaa9be]">
                    <div className="w-[256px] flex flex-row space-x-6">
                        <p className="flex justify-center items-center">POS<span>{vectorActive}</span></p>
                        <p className="flex justify-center items-center">TEAM<span>{vector}</span></p>
                    </div>
                    <div className="w-[215px] flex flex-row justify-between">
                        {["P", "W", "D", "L", "F", "A"].map((elem, index) => (
                            <p key={index.toString()} className="w-6 h-6 flex justify-center items-center"> {elem} </p>
                        ))}
                    </div>
                    <div className="w-[140px] flex flex-row justify-around">
                        {["GD", "PTS"].map((elem, index) => (
                            <p key={index.toString()} className="w-6 h-6 flex justify-center items-center">{elem}{<span>{vector}</span>}</p>
                        ))}
                    </div>
                </div>

                {statistics.map((el, index) => (
                    <div key={index.toString()} className={`w-full h-[28px] font-sans flex justify-around items-center border-b border-[#cae2d9] ${el.color}`}>
                        <div className="w-[256px] flex flex-row items-center tracking-wider font-bold space-x-2">
                            <span className="flex flex-row justify-center items-center space-x-2">
                                {vectorRight}
                                <p className="w-6 h-6">{el.place}</p>
                            </span>
                            <p className="pl-3">{el.name}</p>
                        </div>
                        <div className="w-[215px] flex flex-row justify-between">
                            {[el.game, el.win, el.draw, el.lost, el.scoredGoal, el.concededGoal].map((elem, index) => (
                                <p key={index.toString()} className="w-6 h-6 flex justify-center items-center"> {elem}</p>
                            ))}
                        </div>
                        <div className="w-[140px] flex flex-row justify-around">
                            {[(el.scoredGoal - el.concededGoal), el.point].map((elem, index) => (
                                <p key={index.toString()} className="w-6 h-6 flex justify-center items-center text-base text-black font-bold">{elem}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}