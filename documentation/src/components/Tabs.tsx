import * as React from 'react';

interface State {
  active: number
}

interface Props {
  isTabSmall: boolean,
  isBasic: boolean
  children: any
}

export class Tabs extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  select = (i:number) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i,
      });
    };
  };

  tabs = () => {
    const { children } = this.props;
    const { active } = this.state;
    return React.Children.map(children, (item: string, i) => {
      if (i % 2 === 0) {
        let selected = active === i ? 'active' : '';
        let isDisabled = !!item.match(/-disabled-/);
        const removeFlag = () => {
          return item.replace('-disabled-','');
        };

        return (
            <button role="tab" disabled={isDisabled} onClick={this.select(i)} className={`${selected} tab`}>
              {removeFlag()}
            </button>
        );
      }
    });
  };

  content() {
    const { children } = this.props;
    const { active } = this.state;
    return React.Children.map(children, (item, i) => {
      if (i - 1 === active) {
        return <div className="content">{item}</div>;
      }
    });
  }

  render() {
    const { isTabSmall, isBasic } = this.props;
    const tabSize = isTabSmall ? '-sm' : '-lg';
    const basic = isBasic ? 'tabs-basic' : '';
    return (
        <div role="tabgroup" className={`tabs tabs${tabSize} ${basic}`}>
          {this.tabs()}
          {this.content()}
        </div>
    );
  }
}
