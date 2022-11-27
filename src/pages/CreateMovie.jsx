import React, { useState } from "react";
import "../style/CreateMovie.css";
import { useForm } from "react-hook-form";
import Create from "components/Create";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import DemoPage from "./DemoPage";

const CreateMovie = ({ page = "createMovie", getData }) => {
  const { movies } = useSelector((state) => state.movies);
  const [errText, setErrText] = useState("");
  const [demoObj, setDemoObj] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const handleCreate = (data) => {
    const demoObj = {
      id: movies.length + 1,
      name: `${data.name}`,
      data: +data.data,
      duration: +data.duration,
      reiting: {
        star5: 0,
        star4: 0,
        star3: 0,
        star2: 0,
        star1: 0,
      },
      image: `${data.img}`,
      background: `${data.bg}`,
      ifream: `${data.ifream}`,
      genre: `${data.genre}`,
      actors: [
        {
          image: `${data.actor_img1}`,
          name: `${data.actor_name1}`,
          about: `${data.actor_about1}`,
        },
        {
          image: `${data.actor_img2}`,
          name: `${data.actor_name2}`,
          about: `${data.actor_about2}`,
        },
        {
          image: `${data.actor_img3}`,
          name: `${data.actor_name3}`,
          about: `${data.actor_about3}`,
        },
      ],
    };
    getData(demoObj);
    setDemoObj(demoObj);
  };

  const errTextFn = (text) => {
    setErrText(text);
  };

  return (
    <>
      <div className="createMovie_container">
        <div className="createMovie_forms">
          <form onSubmit={handleSubmit(handleCreate)}>
            <div className="createMovie_bg">
              <motion.input
                id="firstname"
                type="text"
                placeholder="background"
                whileFocus={{
                  scale: 1.05,
                  backgroundColor: "#ea003d",
                }}
                {...register("bg", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Background",
                  },
                })}
              />
              <motion.input
                id="firstname"
                type="text"
                placeholder="large background"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("largeBg")}
              />
            </div>
            <div className="createMovie_NDD">
              <motion.input
                id="firstname"
                type="text"
                placeholder="name"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("name", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Name",
                  },
                })}
              />
              <motion.input
                id="firstname"
                type="text"
                placeholder="data"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("data", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Data",
                  },
                })}
              />
              <motion.input
                id="firstname"
                type="text"
                placeholder="duration"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("duration", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Duration",
                  },
                })}
              />
            </div>
            <div className="createMovie_IIG">
              <motion.input
                id="firstname"
                type="text"
                placeholder="Image"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("img", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Image",
                  },
                })}
              />
              <motion.input
                id="firstname"
                type="text"
                placeholder="Ifream"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("ifream", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Ifream",
                  },
                })}
              />
              <motion.input
                id="firstname"
                type="text"
                placeholder="Genre"
                whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                {...register("genre", {
                  required: {
                    value: page === "createMovie" ? true : false,
                    message: "Genre",
                  },
                })}
              />
            </div>
            <div className="createMovie_actorsDiv">
              <div className="createMovie_actors1">
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="1 actors name"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_name1", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor name",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="1 actors image"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_img1", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor Image",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="1 actors about"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_about1", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor about",
                    },
                  })}
                />
              </div>
              <div className="createMovie_actors2">
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="2 actors name"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_name2", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor name",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="2 actors image"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_img2", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor Image",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="2 actors about"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_about2", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor about",
                    },
                  })}
                />
              </div>
              <div className="createMovie_actors3">
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="3 actors name"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_name3", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor name",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="3 actors image"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_img3", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor Image",
                    },
                  })}
                />
                <motion.input
                  id="firstname"
                  type="text"
                  placeholder="3 actors about"
                  whileFocus={{ scale: 1.05, backgroundColor: "#ea003d" }}
                  {...register("actor_about3", {
                    required: {
                      value: page === "createMovie" ? true : false,
                      message: "Actor about",
                    },
                  })}
                />
              </div>
            </div>

            <div className="createMovie_text_warning">
              {errText.length !== 0 ? errText + " is required !!!" : ""}
            </div>
            <div className="createMovie_buttons">
              <Create
                isValid={isValid}
                errors={errors}
                errTextFn={errTextFn}
                page={page}
              />
            </div>
          </form>
        </div>
      </div>
      {demoObj && page === "createMovie" && (
        <DemoPage demo={demoObj} page={page} />
      )}
    </>
  );
};

export default CreateMovie;
