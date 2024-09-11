module JwtToken
  class JwtToken
    def self.encode_token(payload)
      JWT.encode(payload, 'hellomars1211') 
    end

    def self.decoded_token(token)
          begin
              JWT.decode(token, 'hellomars1211')
          rescue JWT::DecodeError
              nil
          end
    end

  end

end