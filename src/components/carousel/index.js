import classnames from 'classnames';
import React from 'react';
import ReactCarousel from '../nuka-carousel';


export default class Carousel extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  onChange = (index) => {
    this.setState(
      {
        selectedIndex: index,
      },
      () => {
        if (this.props.afterChange) {
          this.props.afterChange(index);
        }
      },
    );
  }

  render() {
    const {
      infinite,
      selectedIndex,
      beforeChange,
      afterChange,
      dots,
      ...restProps
    } = this.props;

    const {
      prefixCls,
      dotActiveStyle,
      dotStyle,
      vertical,
    } = restProps;

    const newProps = {
      ...restProps,
      wrapAround: infinite,
      slideIndex: selectedIndex,
      beforeSlide: beforeChange,
      animation: 'zoom',
      withoutControls: true,
    };

    let Decorators = [];

    console.log(Decorators);

    if (dots) {
      Decorators = [
        {
          component: ({
            slideCount,
            slidesToScroll,
            currentSlide,
          }) => {
            const arr = [];
            for (let i = 0; i < slideCount; i += slidesToScroll) {
              arr.push(i);
            }
            const dotDom = arr.map(index => {
              const dotCls = classnames(`am-carousel-wrap-dot`, {
                [`am-carousel-wrap-dot-active`]: index === currentSlide,
              });
              const currentDotStyle =
                index === currentSlide ? dotActiveStyle : dotStyle;
              return (
                <div className={dotCls} key={index}>
                  <span style={currentDotStyle} />
                </div>
              );
            });
            return <div className={`am-carousel-wrap`}>{dotDom}</div>;
          },
          position: 'BottomCenter',
        },
      ];
    }

    const wrapCls = classnames(prefixCls, 'space-carousel', {
      [`am-carousel-vertical`]: vertical,
    });

    return (
      <ReactCarousel
        {...newProps}
        className={wrapCls}
        cellAlign="center"
        style={{ height: '100%' }}
        afterSlide={this.onChange}
      />
    );
  }
}
