import React from 'react';
import './imagecard.css';


export default class Imagecard extends React.Component {
  render() {
    return (
      <div className="imagecard-imagecard-9">
          <div className="imagecard-0">
              <div className="imagecard-image_2" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}}>
                  <div className="imagecard-0-0-0">
                      <div className="imagecard-rectangle_5">
                          <div className="imagecard-0-0-0-0-0">
                              <div className="imagecard-novidade_-4">Novidade</div>
                          </div>
                      </div>
                      <div className="imagecard-rectangle_5-1">
                          <div className="imagecard-0-0-0-1-0">
                              <div className="imagecard-visitas_em_breve_-1">
                                  Visitas em breve
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="imagecard-1">
              <div className="imagecard-rectangle_3">
                  <div className="imagecard-1-0-0">
                      <div className="imagecard-r_1">{ this.props.text }</div>
                  </div>
                  <div className="imagecard-1-0-1">
                      <div className="imagecard-alameda_ja_7">
                          { this.props.text2 }
                      </div>
                  </div>
                  <div className="imagecard-1-0-2">
                      <div className="imagecard-jardim_paulista_4">
                          { this.props.text3 }
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
