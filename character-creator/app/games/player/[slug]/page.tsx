import Dice from '@/components/Dice';
import HealthBar from '@/components/Healthbar';

export default function gamePagePlayerView() {
    return (
        <div>
            <h1>Game Page Player View</h1>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <Dice />
            </div>
            <div>
                <HealthBar />
            </div>
        </div>
    );
}