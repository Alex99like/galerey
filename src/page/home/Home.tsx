import React from 'react';
import { IImageItem } from '../../types/IImageItem';
import './home.scss';
import { fetchItemImage, fetchItemImageFind } from 'components/utils/arrItems';
import Loader from 'components/common/loader/Loader';
import Search from 'components/search/Search';
import CardsList from 'components/common/cardsList/CardsList';
interface IStateHome {
  inputSearch: '';
  items: IImageItem[];
  loader: boolean;
}
class Home extends React.Component<[], IStateHome> {
  constructor(props: []) {
    super(props);
    this.state = {
      inputSearch: JSON.parse(localStorage.getItem('search-v-1')!),
      items: [],
      loader: false,
    };
  }
  async componentDidMount(): Promise<void> {
    this.setState({ loader: false });
    const response = await fetchItemImage();
    this.setState({
      items: response,
    });
    this.setState({ loader: true });
  }

  async searchMethod(str: string) {
    this.setState({ loader: false });
    const res = await fetchItemImageFind(str.trim().toLowerCase());
    this.setState({ loader: true });
    this.setState((prev) => ({ ...prev, items: res }));
  }

  render() {
    return (
      <>
        <Search searchMethod={this.searchMethod.bind(this)} inputSearch={this.state.inputSearch} />
        {this.state.loader ? <CardsList items={this.state.items} /> : <Loader />}
      </>
    );
  }
}

export default Home;
