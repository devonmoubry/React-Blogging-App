import { render } from 'react-dom'
import React from 'react'
import AppRoot from './views/app_root.js'

export default function app() {

  const App = React.createClass({
    render: function() {
      return (
        <div>
        <h1>Blogs by Devon</h1>
        <NewPost />
        <Content />

      </div>);
    }
  });

  const Content = React.createClass({

    render: function() {

      return (
      <div>
        <BlogPost
        title='First Blog Post'
        body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        date='April 6, 2017'/>
        <BlogPost
        title='Second Blog Post'
        body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        date='April 7, 2017'/>
        <BlogPost
        title='Third Blog Post'
        body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        date='April 8, 2017'/>
        <BlogPost
        title='Fourth Blog Post'
        body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        date='April 9, 2017'/>
        <BlogPost
        title='Fifth Blog Post'
        body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        date='April 10, 2017'/>
      </div>
    );
    }
  });

  const BlogPost = React.createClass ({

    getInitialState: function() {
      return {
        hidden: false
      };
    },

    hideContent: function () {
      this.setState({
        hidden: !this.state.hidden
      });
    },

    render: function() {
      var styleClass = 'show-content';
      if (this.state.hidden) {
        styleClass = 'hide-content';
      }
      return (
        <section>
        <button onClick={this.hideContent}>Toggle</button>
        <h1>{this.props.title}</h1>
        <h3>{this.props.date}</h3>
        <p className={styleClass}>{this.props.body}</p>
        </section>
      );
    },
    propTypes: {
      title: React.PropTypes.string.isRequired,
      date: React.PropTypes.string.isRequired,
      body: React.PropTypes.string.isRequired,
    }
  });

  const NewPost = React.createClass ({
    render: function() {
      return (
        <section>
        <h3>Create New Post</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">TITLE</label>
            <input type="text" id="title"/>
            <label htmlFor="body">BODY</label>
            <textarea id="body"/>
          </form>
        </section>
      )
    }
  })

  render(<App />, document.querySelector('#app'));
}
