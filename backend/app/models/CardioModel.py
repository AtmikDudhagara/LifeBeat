import joblib
import pandas as pd

class CardioModel:
    def __init__(self, model_path: str):
        with open(model_path, 'rb') as file:
            loaded_obj = joblib.load(file)
            
            # Check if the loaded object actually has a predict method
            if not hasattr(loaded_obj, 'predict'):
                raise TypeError(f"The file at {model_path} is a {type(loaded_obj)}, not a trained model!")
            
            self.model = loaded_obj
        with open(model_path, 'rb') as file:
            self.model = joblib.load(file)
        
        
        self.feature_order = [
            'age', 'gender', 'height', 'weight', 'ap_hi', 'ap_lo', 
            'cholesterol', 'gluc', 'smoke', 'alco', 'active', 
            'bmi', 'pulse_pressure', 'high_bp'
        ]

    def predict(self, data: dict):

        height_m = data['height'] / 100
        data['bmi'] = data['weight'] / (height_m ** 2)
        data['pulse_pressure'] = data['ap_hi'] - data['ap_lo']
        data['high_bp'] = 1 if (data['ap_hi'] >= 140 or data['ap_lo'] >= 90) else 0

        data['smoke'] = 1 if data['smoke'] else 0
        data['alco'] = 1 if data['alco'] else 0
        data['active'] = 1 if data['active'] else 0

        df = pd.DataFrame([data])
        df = df[self.feature_order]

        prediction = self.model.predict(df)[0]
        probability = self.model.predict_proba(df)[0][1]
        
        return int(prediction), float(probability)