import React, { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Pagination } from "@mui/material";
import usePagination from "./Pagination";
import { default as data } from "../../data.json";

export default function Park() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e, p) => {
    setPage(p);
    goToTop(true);
    _DATA.jump(p);
  };

  return (
    <Container>
      <h1>The 10 FAMOUS NATIONAL PARK IN THE US</h1>
      <br></br>
      {_DATA.currentData().map((data) => {
        return (
          <>
            <div key={data.id} className="div-title">
              <Card className="cards">
                <CardHeader
                  title={data.name}
                  subheader={data.states}
                  className="title"
                />
                <Typography paragraph className="desc">{data.description}</Typography>

                <CardContent>
                  <CardMedia component="img" image={data.image}></CardMedia>
                  <br></br>
                  <Typography paragraph className="desc">
                    {data.subText} {data.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <h2>The famous campgrounds</h2>
                  {data.campgrounds.map((campgrounds, i) => (
                    <div className="div-camps">
                      <div>
                        <img
                          src={campgrounds.image}
                          alt={campgrounds.campName}
                          key={i}
                          className="camp-image"
                        />
                        <h3>{campgrounds.campName}</h3>
                      </div>
                      <div>
                        <p>{campgrounds.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </>
        );
      })}
      <div className="div-pages">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}
