import * as React from 'react';

export class Tabs extends React.Component<Tabs> {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      active: 0,
    };
  }

  select = i => {
    let _this = this;
    return function() {
      _this.setState({
        active: i,
      });
    };
  };

  tabs = () => {
    return React.Children.map(this.props.children, (item: string, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        let isDisabled = !!item.match(/-disabled/);
        const removeFlag = () => {
          return item.replace('-disabled','');
        };

        return (
          <button disabled={isDisabled} onClick={this.select(i)} className={`${active} tab`}>
            {removeFlag()}
          </button>
        );
      }
    });
  };

  content() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className="content">{item}</div>;
      }
    });
  }

  render() {
    const tabSize = this.props.isTabSmall ? '-sm' : '-lg';
    const isBasic = this.props.isBasic ? 'tabs-basic' : '';
    return (
      <div className={`tabs tabs${tabSize} ${isBasic}`}>
        {this.tabs()}
        {this.content()}
      </div>
    );
  }
}
