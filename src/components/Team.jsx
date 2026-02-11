import React from "react";
import { data } from "../pages/restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container rounded-2xl">
          {data[0].team.map((element) => {
            return (
              <div className="card  " key={element.id}>
               <div className=" rounded-[30px] p-1 justify-center h-[270px] w-48 mt-2 flex">
  <img src={element.image} alt={element.name} className="h-5 " />
</div>

                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;