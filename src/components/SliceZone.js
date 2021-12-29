import React from "react";
import Hero from "./Hero";

const SliceZone = ({body, page}) => {

    return (
        <div>
            {body.map((bodyContent, primary, index) => {
                if (bodyContent.slice_type === "hero") {

                    const heroContent = bodyContent.primary;
                    return (
                        <Hero
                            key={index}
                            title={heroContent.hero_title.richText}
                            content={heroContent.hero_content}
                            backgroundImage={heroContent.background_image.fluid.src}
                            theme={page !== "home" ? {height: "450px"} : null}
                        />
                    );

                } else if (bodyContent.slice_type === "article") {
                    return <div key={index}>Blog posts</div>;
                }

                return null;
            })}
        </div>
    );
};

export default SliceZone;
