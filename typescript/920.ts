function numMusicPlaylists(n: number, goal: number, k: number): number {
    const mod = Math.pow(10, 9) + 7;
    const dp = Array.from({ length: goal + 1 }, () =>
        Array.from({ length: n + 1 }, () => -1)
    );
    function count(cur_goal: number, old_songs: number) {
        if (cur_goal === 0 && old_songs === n) {
            return 1;
        }
        if (cur_goal === 0 || old_songs > n) {
            return 0;
        }
        if (dp[cur_goal][old_songs] !== -1) {
            return dp[cur_goal][old_songs];
        }
        // choose new song
        let res = ((n - old_songs) * count(cur_goal - 1, old_songs + 1)) % mod;

        if (old_songs - k > 0) {
            // choose old song
            res += ((old_songs - k) * count(cur_goal - 1, old_songs)) % mod;
        }
        dp[cur_goal][old_songs] = res % mod;
        return dp[cur_goal][old_songs];
    }
    return count(goal, 0);
}
