import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'blog.PostsList'
//             }
//           }
//         ],
//         options: {
//           topBar: {
//             title: {
//               text: 'Blog'
//             }
//           }
//         }
//       }
//     }
//   });
// });

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(tabs());
});

const tabs = () => {

    return {
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'blog.Tab1',
                                    passProps: {
                                    },
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab1',
                                },
                                topBar: {
                                    noBorder: true,
                                    visible: true,
                                    title: {
                                        text: 'Tab1Top',
                                        fontSize: 14,
                                    },
                                    rightButtons: [
                                      {
                                        id: 'addPost',
                                        text: 'Add1'
                                      }
                                  ],
                                    buttonColor: 'black',
                                },

                            },
                        },
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'blog.Tab2',
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab2',
                                },
                                topBar: {
                                    visible: true,

                                    title: {
                                        text: 'Tab2Top',
                                    },
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'blog.Tab3',
                                    passProps: {
                                    },
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tab3',
                                },
                                topBar: {
                                    title: {
                                        text: 'Tab3Top',
                                        fontSize: 14,
                                    },
                                    buttonColor: 'black',
                                },
                            },
                        },
                    },
                ],
                options: {
                    bottomTabs: {
                        translucent: false,
                        tabColor: 'gray',
                        backgroundColor: 'white',
                        titleDisplayMode: 'alwaysShow',
                        selectedTabColor: 'red',
                        fontSize: 10,
                    },
                    topBar: {
                        translucent: false,
                        drawBehind: false,
                        buttonColor: 'black',
                        background: {
                            color: 'white',
                        },
                    },
                },
            },

        },
    };
};
