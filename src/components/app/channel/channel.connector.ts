import { RootState } from 'MyTypes'
import { connect } from 'react-redux'
import { ChannelSelectors, ChannelActions } from '../../../features/channels'
import ChannelComponent from './channel'

const mapStateToProps = (state: RootState) => ({
  channels: ChannelSelectors.getChannels(state.channels),
})

const mapDispatchProps = {
  add: ChannelActions.add,
  fetch: ChannelActions.fetch,
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(ChannelComponent)
