'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      icon: true
    };
    this.props.icon = VIEW_MODULE;
  }
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.props.icon}
            onSwitch={this.changeLayout.bind(this)} />
        </div>
        {this.renderLayout(this.state.icon)}
      </div>
    );
  }

  changeLayout(){
      this.setState({
        icon: !this.state.icon
      });
      this.props.icon = VIEW_MODULE ? VIEW_MODULE : VIEW_LIST;
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
