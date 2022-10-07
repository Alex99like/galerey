import CustomCard from 'components/common/customCard/CustomCard';
import { IFormResult } from 'components/form/Form';
import { ICustomCard, ISaveFnGet } from 'page/formPage/FormPage';
import React, { Component } from 'react';
import './listCustomCards.scss';

// interface IPropsList {
//   container: React.RefObject<HTMLDivElement>;
// }

interface IStateListCustomCard {
  listCard: ICustomCard[];
}

interface IPropsCustomCard {
  renderCard: ISaveFnGet;
}
class ListCustomCards extends Component<IPropsCustomCard, IStateListCustomCard> {
  constructor(props: IPropsCustomCard) {
    super(props);
    this.state = {
      listCard: [],
    };
    this.props.renderCard.fn = this.getCard.bind(this);
    // this.props.renderCard = this.getCard.bind(this);
  }

  getCard(form: IFormResult) {
    this.setState({
      listCard: [
        ...this.state.listCard,
        {
          title: form.title.current!.value,
          profile: URL.createObjectURL(form.profile.input.current!.files![0]),
          date: form.date.current!.value,
          color: form.color.current!.value,
          whoSee: {
            allPeople: form.whoSee.allPeople.current!.checked,
            favorite: form.whoSee.favorites.current!.checked,
            friends: form.whoSee.fiends.current!.checked,
          },
          approve: form.approve.likes.current!.checked,
        },
      ],
    });
  }

  render() {
    return (
      <div className={'custom-board-cards'}>
        <fieldset>
          <legend>Board your Card</legend>
          <div>
            {this.state.listCard.map((el, keyIndex) => (
              <CustomCard key={keyIndex} item={el} />
            ))}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ListCustomCards;
