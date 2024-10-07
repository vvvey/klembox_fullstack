import React from "react";

const Lessons = () => {
  return (
    <>
      <div className="content">
        <div className="section">
          <h2 className="section-title">ជំពូក ៖​ 2</h2>
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="card assignment">
                  <div className="assignment-date">
                    <img
                      src="https://uploads-ssl.webflow.com/5f731109d7cb3261e53fd2eb/5f736cd50a3c2001f13c471a_video.svg"
                      alt=""
                      className="calendar-icon"
                    />
                    <div className="date">មេរៀនទី 1</div>
                  </div>
                  <a
                    href="{{ url_for('lesson',subject_name=name,lesson_id=lesson.id)}}"
                    className="assignment-details w-inline-block"
                  >
                    <h3 className="card-title">Hello</h3>
                    <div style={{ width: "100%" }}>Some Description</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessons;
