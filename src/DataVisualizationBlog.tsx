import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import dash1 from "./assets/dash1.png";
import dash2 from "./assets/dash2.png";
import dash3 from "./assets/dash3.png";
import dash4 from "./assets/dash4.png";
import dash5 from "./assets/dash5.png";
import dash6 from "./assets/dash6.png";

function DataVisualizationBlog() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImg(null);
      setIsClosing(false);
    }, 250); 
  };

  return (
    <div className="container blog-container">
      
      {selectedImg && (
        <div 
          className={`lightbox-overlay ${isClosing ? "closing" : ""}`} 
          onClick={handleClose}
        >
          <img 
            src={selectedImg} 
            alt="Enlarged Dashboard" 
            className={`lightbox-image ${isClosing ? "closing" : ""}`} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <div className="layout-wrapper blog-wrapper">
        
        <div className="blog-header">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="main-title">Data Visualization & Engineering</h1>
          <h3 className="sub-title">Architecting high-performance reporting pipelines and interactive dashboards.</h3>
        </div>

        <div className="text-container blog-post">
          <h2 className="section-title">Migrating to a new Data Visualization Platform</h2>
          
          <p className="paragraph">
            One of the biggest projects I worked on recently was completely rebuilding a reporting system. We used to rely on Superset for dashboards, but the goal was to move everything to Evidence Studio and create a more integrated embedded reporting experience. I ended up taking ownership of the migration and rebuilding the dashboards from the ground up.
          </p>
          <p className="paragraph">
            Instead of simply copying what existed in Superset, I tried to rethink how the data should actually be presented. The old dashboards relied heavily on nested tabs. For example, a single metric might have its own tab, and inside that tab there would be several more tabs for different years or dimensions. This pattern repeated across many metrics, which made the interface feel cluttered and difficult to navigate.
          </p>
          <p className="paragraph">
            When rebuilding the dashboards in Evidence, I replaced that structure with a metric and dimension filtering system. Instead of jumping between dozens of nested tabs, users could simply select the metric and dimension they cared about and see the data update instantly. It made the dashboards much simpler and saved a lot of screen space while still giving users access to the same views.
          </p>
          <p className="paragraph">Performance was another big challenge. The datasets behind these dashboards pulled from many relational tables, which meant queries could become expensive. To solve this, I leaned heavily on materialized views. The idea was to precompute the expensive joins and aggregations ahead of time and store the results in a separate table. The dashboards could then query this precomputed data instead of rebuilding the dataset from scratch each time, which made load times dramatically faster.</p>
          <p className="paragraph">A lot of the work ended up being testing and validation. I spent a good amount of time writing diagnostic SQL queries and comparing the results with the numbers coming from the production application. There is something very satisfying about running a complex query you wrote and seeing the results line up perfectly with the application data. That moment is when you know the data pipeline is doing exactly what it should.</p>
          <p className="paragraph">Looking back, the project was a good reminder that building dashboards is not just about making charts. It is about designing systems that make complex data easier to explore, faster to load, and easier for people to understand.</p>
          <p className="paragraph">Below are a few samples of the dashboards with dummy data.</p>

          <div className="blog-image-grid">
            <img src={dash1} alt="Financial Dashboard 1" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash1)} />
            <img src={dash6} alt="Financial Dashboard 6" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash6)} />
            <img src={dash3} alt="Financial Dashboard 3" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash3)} />
            <img src={dash4} alt="Financial Dashboard 4" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash4)} />
            <img src={dash5} alt="Financial Dashboard 5" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash5)} />
            <img src={dash2} alt="Financial Dashboard 2" className="blog-grid-image clickable-image" onClick={() => setSelectedImg(dash2)} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default DataVisualizationBlog;