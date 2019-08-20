import React from 'react';
import './ImageCardNone.css';


export default class ImageCardNone extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent imagecardnone">
          { (this.props.state === "default") ?
              <div className="imagecardnone-default-3">
                  <div className="imagecardnone-0-0-0">
                      <div className="imagecardnone-rectangle_9">
                          <div className="imagecardnone-0-0-0-0-0">
                              <div className="imagecardnone-image_2" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}} /> 
                          </div>
                          <div className="imagecardnone-0-0-0-0-1">
                              <div className="imagecardnone-rectangle_3">
                                  <div className="imagecardnone-0-0-0-0-1-0-0">
                                      <div className="imagecardnone-r_2">
                                          { this.props.text }
                                      </div>
                                  </div>
                                  <div className="imagecardnone-0-0-0-0-1-0-1">
                                      <div className="imagecardnone-rua_batataes_3">
                                          { this.props.text2 }
                                      </div>
                                  </div>
                                  <div className="imagecardnone-0-0-0-0-1-0-2">
                                      <div className="imagecardnone-jardim_paulista_1">
                                          { this.props.text3 }
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover imagecardnone-_hover-7">
              <div className="imagecardnone-1-0">
                  <div className="imagecardnone-rectangle_1">
                      <div className="imagecardnone-1-0-0-0">
                          <div className="imagecardnone-rectangle_9-2">
                              <div className="imagecardnone-1-0-0-0-0-0">
                                  <div className="imagecardnone-image_2-5" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}} /> 
                              </div>
                              <div className="imagecardnone-1-0-0-0-0-1">
                                  <div className="imagecardnone-rectangle_3-6">
                                      <div className="imagecardnone-1-0-0-0-0-1-0-0">
                                          <div className="imagecardnone-r_2_">
                                              { this.props.text }
                                          </div>
                                      </div>
                                      <div className="imagecardnone-1-0-0-0-0-1-0-1">
                                          <div className="imagecardnone-rua_batataes_33">
                                              { this.props.text2 }
                                          </div>
                                      </div>
                                      <div className="imagecardnone-1-0-0-0-0-1-0-2">
                                          <div className="imagecardnone-jardim_paulista_11">
                                              { this.props.text3 }
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
