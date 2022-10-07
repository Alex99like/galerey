import React, { Component } from 'react';
import Photo from '../../assets/photo.jpg';

interface IStateForm {
  dropClass: boolean;
  image: string;
}

interface IPropsProfile {
  input: React.RefObject<HTMLInputElement>;
  validate: React.RefObject<HTMLParagraphElement>;
  image: React.RefObject<HTMLImageElement>;
}

class ProfileLoad extends Component<IPropsProfile, IStateForm> {
  constructor(props: IPropsProfile) {
    super(props);
    this.state = {
      dropClass: false,
      image: '',
    };
  }

  onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('image')) {
      this.setState({ image: URL.createObjectURL(e.target.files[0]) });
    } else {
      this.setState({ image: '' });
    }
  }

  handlerDragEnter() {
    this.setState({ dropClass: true });
  }

  handlerDragLeave() {
    this.setState({ dropClass: false });
  }

  handlerMouseEnter() {
    this.setState({ dropClass: true });
  }

  handlerMouseLeave() {
    this.setState({ dropClass: false });
  }

  render(): React.ReactNode {
    return (
      <fieldset
        onDragLeave={() => this.handlerDragLeave()}
        onDragEnter={() => this.handlerDragEnter()}
        onMouseEnter={() => this.handlerMouseEnter()}
        onMouseLeave={() => this.handlerMouseLeave()}
        className="form-avatar"
      >
        <div className={`hover-drag ${this.state.dropClass ? 'active' : ''}`}>
          <span>Upload Your Photo!!!</span>
        </div>
        <legend>Your Photo</legend>
        <label className={'label-avatar'} htmlFor="upload-profile">
          {this.state.image ? (
            <img ref={this.props.image} src={this.state.image} />
          ) : (
            <img src={Photo} alt="" />
          )}

          <input
            ref={this.props.input}
            onChange={(e) => this.onChangeImage(e)}
            accept="image/png, image/gif, image/jpeg"
            id="upload-profile"
            type={'file'}
          />
          <p ref={this.props.validate}>
            Сlick here or drag the image to <span>Download!!!</span>
          </p>
        </label>
      </fieldset>
    );
  }
}

export default ProfileLoad;
