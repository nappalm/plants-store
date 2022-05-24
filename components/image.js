import styled from '@emotion/styled'

const ImageStyle = styled.img`
  border-radius: 0.2rem 0.2rem 0 0;
  height: 20rem;
  width: 250px;
`

const Image = ({ src, alt }) => {
  return <ImageStyle src={src} alt={alt} />
}

export default Image
