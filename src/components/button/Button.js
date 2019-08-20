import React from 'react';
import './Button.css';
import PropTypes from 'prop-types'

/**
 * This component is a simple button. Use with wisdom.
 * @visibleName Button
 * @version 1.0.0
 */
export default class Button extends React.Component {
    static propTypes = {
        /** This prop show how state is the button. You must set the state props. */
        state: PropTypes.oneOf(['default']),
      }
      static defaultProps = {
        state: ""
      }

  render() {
    return (
      <div className="pd-onhover-parent button">
          <div className="pd-onhover button-_hover-3">
              <div className="button-0-0">
                  <div className="button-rectangle_1">
                      <div className="button-0-0-0-0">
                          <div className="button-receber_uma_proposta_-7">
                              Receber uma proposta
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="button-default-8">
                  <div className="button-1-0-0">
                      <div className="button-rectangle_11">
                          <div className="button-1-0-0-0-0">
                              <div className="button-receber_uma_proposta_-78">
                                  Receber uma proposta
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
