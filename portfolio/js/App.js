'use strict'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'All'
        };
        this.projects = this.props.projects;
        this.props.selected = this.state.filter;
        console.log('this.props', this.props);
    }

    changeView(filter) {
        console.log('filter', filter)
        if(this.props.filters.indexOf(filter)> -1){
            this.setState({filter: filter});
            this.props.selected = filter;
            this.props.projects = filter == 'All' ? this.projects : this.projects.filter(item => item.category == this.props.selected);
        }
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={this.props.filters}
                    selected={this.props.selected}
                    onSelectFilter={this.changeView.bind(this) }/>
                <Portfolio projects={this.props.projects}/>
            </div>
        );
    }
}