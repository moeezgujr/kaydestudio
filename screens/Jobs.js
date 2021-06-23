import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, jobs, nowTheme } from '../constants/';
import { Card } from '../components/';
import { JobCard } from '../components/';
class Jobs extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
        <Block col>
          <JobCard item={jobs[0]} horizontal />
          <JobCard item={jobs[1]} horizontal />
          <JobCard item={jobs[2]} horizontal />
          <JobCard item={jobs[0]} horizontal />
          <JobCard item={jobs[1]} horizontal />
          <JobCard item={jobs[2]} horizontal />
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE,
    minWidth: '100%',
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
});

export default Jobs;
