import React from "react";
import StyleList from "../styles/List.module.css";
function Treningcard({ item }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div className={StyleList.card_margin}>
            <div
              id="box"
              className={` ${StyleList.card} ${StyleList.card_margin}`}
            >
              <div className={StyleList.no_border}>
                <h5 className={StyleList.cardtitle}>
                  Year: {item.Date.slice(0, 4)}
                </h5>
              </div>
              <div className="card-body pt-0">
                <div className={StyleList.widget_49}>
                  <div className={StyleList.widget_49_title_wrapper}>
                    <div className={StyleList.widget_49_date_primary}>
                      <span className={StyleList.widget_49_date_day}>
                        {item.Date.slice(5, 7)}
                      </span>
                      <span className={StyleList.widget_49_date_month}>
                        apr
                      </span>
                    </div>
                    <div className={StyleList.widget_49_meeting_info}>
                      <span className={StyleList.widget_49_pro_title}>
                        Type of trening {item.Treningtype}
                      </span>
                      <span className={StyleList.widget_49_meeting_time}>
                        Houre of trening: {item.Hour.slice(0, 2)}{" "}
                        <strong>:</strong> {item.Hour.slice(3, 5)} Hrs
                      </span>
                    </div>
                  </div>
                  <ol
                    className={`content ${StyleList.widget_49_meeting_points}`}
                  >
                    <li className={StyleList.widget_49_meeting_item}>
                      <span>Pause between sets {item.Pauze}</span>
                    </li>
                    <li className={StyleList.widget_49_meeting_item}>
                      <span>Number of repeat {item.Ponavljanje}</span>
                    </li>
                    <li className={StyleList.widget_49_meeting_item}>
                      <span>{item.Opistreninga}</span>
                    </li>
                  </ol>
                  <div className={StyleList.widget_49_meeting_action}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treningcard;
