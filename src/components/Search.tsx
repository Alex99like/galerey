import React, { Component } from 'react';
import '../styles/search.scss';

interface IPropsSearch {
  searchMethod: (str: string) => void;
  inputSearch: string;
}

interface IStateSearch {
  inputSearch: string;
  activeClass: boolean;
  prevResp: string;
}
class Search extends Component<IPropsSearch, IStateSearch> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: IPropsSearch) {
    super(props);
    this.state = {
      inputSearch: props.inputSearch,
      activeClass: false,
      prevResp: '',
    };
    this.input = React.createRef();
  }

  componentWillUnmount(): void {
    const value = this.state.inputSearch;
    localStorage.setItem('search-v-1', JSON.stringify(value));
  }

  componentDidMount(): void {
    this.input.current?.focus();
  }

  inputMethod(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState((prev) => ({ ...prev, inputSearch: e.target.value }));
  }

  submitMethod() {
    this.props.searchMethod(this.state.inputSearch);
    this.setState((prev) => ({ ...prev, prevResp: this.state.inputSearch, inputSearch: '' }));
    this.input.current?.focus();
  }

  submitEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      this.props.searchMethod(this.state.inputSearch);
      this.setState((prev) => ({
        ...prev,
        prevResp: this.state.inputSearch,
        inputSearch: '',
        activeClass: true,
      }));
    }
  }

  submitUpEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      this.setState((prev) => ({ ...prev, activeClass: false }));
    }
  }

  render() {
    return (
      <div className={'search-container'}>
        <input
          ref={this.input}
          onKeyDown={(e) => this.submitEnter(e)}
          onKeyUp={(e) => this.submitUpEnter(e)}
          onChange={(e) => this.inputMethod(e)}
          value={this.state.inputSearch}
          type={'search'}
          placeholder={
            this.state.prevResp ? `${this.state.prevResp}...` : 'Enter your User Name... '
          }
        />
        <button
          className={this.state.activeClass ? 'active' : ''}
          onClick={() => this.submitMethod()}
          onMouseDown={() => {
            this.setState({ activeClass: true });
          }}
          onMouseUp={() => {
            this.setState({ activeClass: false });
          }}
          type={'button'}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default Search;
