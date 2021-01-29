import React from "react";
import AddPost from "../addPost/AddPost";
import Header from "../header/Header";
import PostFilter from "../postFilter/PostFilter";
import Posts from "../posts/Posts";
import Search from "../searchPanel/Search";

class App extends React.Component {
  state = {
    data: [{ label: "To study react", important: false, liked: false, id: 1 }],
    term: "",
    filter: "all",
  };
  delateItem = (itemId) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== itemId) };
    });
  };
  onTogleImportant = (itemId) => {
    this.setState(({ data }) => {
      return {
        data: data.map((dataItem) => {
          if (dataItem.id === itemId) {
            return { ...dataItem, important: !dataItem.important };
          }
          return dataItem;
        }),
      };
    });
  };
  onTogleliked = (itemId) => {
    this.setState(({ data }) => {
      return {
        data: data.map((dataItem) => {
          if (dataItem.id === itemId) {
            return { ...dataItem, liked: !dataItem.liked };
          }
          return dataItem;
        }),
      };
    });
  };
  addPost = (body) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          { label: body, important: false, liked: false, id: Date.now() },
        ],
      };
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };
  updateSearch = (term) => {
    this.setState({ term });
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  postFilter = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.liked);
    } else {
      return items;
    }
  };

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter((itemData) => itemData.liked).length;
    const allPosts = data.length;
    const visiblePost = this.postFilter(this.searchPost(data, term), filter);
    return (
      <div className="container">
        <Header liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <Search updateSearch={this.updateSearch} />
          <PostFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <Posts
          data={visiblePost}
          delateItem={this.delateItem}
          onTogleImportant={this.onTogleImportant}
          onTogleliked={this.onTogleliked}
        />
        <AddPost addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
