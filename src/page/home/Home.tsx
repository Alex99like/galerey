import React from 'react';
import { IImageItem } from '../../types/IImageItem';
import './home.scss';
import Loader from 'components/common/loader/Loader';
import Search from 'components/search/Search';
import CardsList from 'components/common/cardsList/CardsList';
import FetchApi from 'api/FetchApi';
import Modal from 'components/common/modalCard/Modal';
export interface IStateHome {
  inputSearch: '';
  items: IImageItem[];
  loader: boolean;
  isModal: {
    active: boolean;
    id?: string;
  };
}
class Home extends React.Component<[], IStateHome> {
  constructor(props: []) {
    super(props);
    this.state = {
      inputSearch: JSON.parse(localStorage.getItem('search-v-1')!),
      items: [],
      loader: false,
      isModal: {
        active: false,
        id: '',
      },
    };
  }

  async componentDidMount(): Promise<void> {
    this.setState({ loader: false });
    const response = await FetchApi.getCards();
    this.setState({
      items: response,
    });
    this.setState({ loader: true });
  }

  hiddenScroll(active: boolean) {
    if (active) {
      document.body.classList.add('modal');
    } else {
      document.body.classList.remove('modal');
    }
  }

  async searchMethod(str: string) {
    this.setState({ loader: false });
    const res = await FetchApi.getCards(1, str.trim().toLowerCase() || 'new-york');
    this.setState({ loader: true });
    console.log(res);
    this.setState((prev) => ({ ...prev, items: res }));
  }

  setStateModal(state: boolean, id?: string) {
    if (state && id) {
      this.setState({ isModal: { active: true, id } });
      this.hiddenScroll(true);
    } else {
      this.setState({ isModal: { active: false } });
      this.hiddenScroll(false);
    }
  }

  render() {
    return (
      <>
        {this.state.isModal.active && (
          <Modal
            card={this.state.items.find((el) => el.id === this.state.isModal.id)!}
            closeModal={this.setStateModal.bind(this)}
          />
        )}
        <Search searchMethod={this.searchMethod.bind(this)} inputSearch={this.state.inputSearch} />
        {this.state.loader ? (
          <CardsList
            isModal={this.state.isModal.active}
            stateModal={this.setStateModal.bind(this)}
            items={this.state.items}
          />
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Home;
