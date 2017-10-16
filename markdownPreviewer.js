var Markdown = React.createClass({
  
  getInitialState: function () {
    return { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' };
  },
  
  handleChange: function (event) {
    this.setState({
      value: event.target.value
   });
  },
  
  createMarkup: function () {
    return {__html: marked(this.state.value, {sanitize: true})};
  },
  
  render: function () {
    return (
      <div>
        <table>
          <tr>
            <td><textarea value={this.state.value} onChange={this.handleChange}></textarea></td>
            <td dangerouslySetInnerHTML={this.createMarkup()}></td>
          </tr>
        </table>
      </div>
  );
 }
});

ReactDOM.render(
  <Markdown />,
  document.getElementById('app')
)