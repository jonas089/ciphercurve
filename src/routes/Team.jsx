import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

const teamMembers = [
    {
        name: "Jonas Pauli",
        role: "Founder and Senior Rust Engineer",
        image: "/jonas-profile.jpeg",
        linkedin: "https://www.linkedin.com/in/jonas-pauli/",
        github: "https://github.com/jonas089"
    },
];

class Team extends React.Component {
    render() {
        return (
            <div className="min-h-screen text-white p-6">
                <AnimatedBackground animationName="auroraBorealis" />
                <h2 className="text-3xl font-bold text-center text-white mb-6">On the Curve</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-[#012B3A] p-4 rounded-lg shadow-lg w-64 text-center border border-[#1985A1]">
                            <img src={member.image} alt={member.name} className="rounded-full mx-auto mb-4 w-32 h-32" />
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-[#1985A1]">{member.role}</p>
                            <div className="flex justify-center gap-4 mt-2">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#41EAD4] hover:underline">
                                    <img src="/linkedin.png" alt="LinkedIn" className="w-7 h-7 inline" />
                                </a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-[#41EAD4] hover:underline">
                                    <img src="/github.png" alt="GitHub" className="w-7 h-7 inline" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Team;
