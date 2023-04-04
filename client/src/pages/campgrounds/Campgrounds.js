import React, { useState, useEffect } from "react";

function Campgrounds() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["parkCode", "name"]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?q=${q}&limit=15&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [q]);

  function search(items) {
    return items.data.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="container">
        <div className="search-wrapper">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for park or campground..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <ol>
            <li>ACAD is the abbreviation for Acadia National Park</li>

            <li>ARCH is the abbreviation for Arches National Park </li>

            <li>BADL is the abbreviation for Badlands National Park </li>

            <li>BIBE is the abbreviation for Big Bend National Park </li>

            <li>BISC is the abbreviation for Biscayne National Park </li>

            <li>
              BLCA is the abbreviation for Black Canyon of the Gunnison National
              Park
            </li>

            <li>BRCA is the abbreviation for Bryce Canyon National Park </li>

            <li>CANY is the abbreviation for Canyonlands National Park </li>

            <li>CARE is the abbreviation for Capitol Reef National Park </li>

            <li>
              CAVE is the abbreviation for Carlsbad Caverns National Park{" "}
            </li>

            <li>CHIS is the abbreviation for Channel Islands National Park </li>

            <li>CONG is the abbreviation for Congaree National Park </li>

            <li>CRLA is the abbreviation for Crater Lake National Park </li>

            <li>CUVA is the abbreviation for Cuyahoa Valley National Park</li>

            <li>DENA is the abbreviation for Denali National Park</li>

            <li>DEVA is the abbreviation for Death Valley National Park </li>

            <li>DRTO is the abbreviation for Dry Tortugas National Park </li>

            <li>EVER is the abbreviation for Everglades National Park </li>

            <li>
              GAAR is the abbreviation for Gates of the Arctic National Park
            </li>

            <li>GLAC is the abbreviation for Glacier National Park</li>

            <li>GLBA is the abbreviation for Glacier Bay National Park </li>

            <li>GRBA is the abbreviation for Great Basin National Park </li>

            <li>GRCA is the abbreviation for Grand Canyon National Park </li>

            <li>
              GRSA is the abbreviation for Great Sand Dunes National Park{" "}
            </li>

            <li>
              GRSM is the abbreviation for Great Smokey Mountains National Park
            </li>

            <li>GRTE is the abbreviation for Grand Teton National Park </li>

            <li>
              GUMO is the abbreviation for Guadalupe Mountains National Park{" "}
            </li>

            <li>HALE is the abbreviation for Haleakala National Park</li>

            <li>
              HAVO is the abbreviation for Hawaii Valcanoes National Park{" "}
            </li>

            <li>HOSP is the abbreviation for Hot Springs National Park </li>

            <li>INDU is the abbreviation for Indiana Dunes National Park </li>

            <li>ISRO is the abbreviation for Isle Royale National Park </li>

            <li>JEFF is the abbreviation for Gateway Arch National Park </li>

            <li>JOTR is the abbreviation for Joshua Tree National Park </li>

            <li>KATM is the abbreviation for Katmai National Park </li>

            <li>KEFJ is the abbreviation for Kenai Fjords National Park</li>

            <li>KOVA is the abbreviation for Kobuk Valley National Park </li>

            <li>LACL is the abbreviation for Lake Clark National Park </li>

            <li>LAVO is the abbreviation for Lassen Volcanic National Park </li>

            <li>MACA is the abbreviation for Mammoth Cave National Park </li>

            <li>MEVE is the abbreviation for Mesa Verde National Park </li>

            <li>MORA is the abbreviation for Mount Rainier National Park </li>

            <li>NERI is the abbreviation for New River Gorge National Park </li>

            <li>NOCA is the abbreviation for North Cascades National Park </li>

            <li>
              NPSA is the abbreviation for the National Park of American Samoa
            </li>

            <li>OLYM is the abbreviation for Olympic National Park </li>

            <li>
              PEFO is the abbreviation for Petrified Forest National Park{" "}
            </li>

            <li>PINN is the abbreviation for Pinnacles National Park </li>

            <li>REDW is the abbreviation for Redwood National Park </li>

            <li>ROMO is the abbreviation for Rocky Mountain National Park </li>

            <li>SAGU is the abbreviation for Saguaro National Park </li>

            <li>
              SEKI is the abbreviation for Sequoia and Kings Canyon National
              Parks{" "}
            </li>

            <li>SHEN is the abbreviation for Shenandoah National Park </li>

            <li>
              THRO is the abbreviation for Theodore Roosevelt National Park{" "}
            </li>

            <li>VIIS is the abbreviation for Virgin Islands National Park </li>

            <li>VOYA is the abbreviation for Voyageurs National Park </li>

            <li>WHSA is the abbreviation for White Sands National Park</li>

            <li>WICA is the abbreviation for Wind Cave National Park </li>

            <li>
              WRST is the abbreviation for Wrangell-ST. Elias National Park
            </li>

            <li>YELL is the abbreviation for Yellowstone National Park </li>

            <li>YOSE is the abbreviation for Yosemite National Park </li>

            <li>ZION is the abbreviation for Zion National Park </li>
          </ol>
        </div>
        <div className="card-grid">
          {search(items).map((item) => (
            <article className="card" key={item.id}>
              <div className="card-content">
                <h2 className="card-name">{item.name}</h2>
                <li>
                  <span>{item.description}</span>
                </li>
                <li>
                  Number Of Sites Reservable -{" "}
                  <span>{item.numberOfSitesReservable}</span>
                </li>
                <li>
                  Total Campsites - <span>{item.campsites.totalSites}</span>
                </li>
                <li>
                  Fees -
                  {item.fees.map((fees) => (
                    <span> {fees.cost}, </span>
                  ))}{" "}
                  {item.fees.map((fees) => (
                    <span>{fees.description}</span>
                  ))}{" "}
                </li>
              </div>
              <div className="card-image">
                {item.images.map((images) => (
                  <img
                    src={`${images.url}`}
                    alt={item.name}
                    className="camp-photo"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default Campgrounds;
